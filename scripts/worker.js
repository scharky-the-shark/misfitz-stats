const BACKEND_URL = "https://dashboard-antihero.duckdns.org";

const PROXY_PREFIXES = [
  "/api/auth/",
  "/api/report"
];

function shouldProxy(pathname) {
  return PROXY_PREFIXES.some((prefix) =>
    pathname === prefix || pathname.startsWith(prefix)
  );
}

function rewriteSetCookie(headers) {
  const output = new Headers(headers);

  const cookies = output.getSetCookie?.() ?? [];

  if (cookies.length > 0) {
    output.delete("set-cookie");

    for (const cookie of cookies) {
      // Cookie kommt vom Backend.
      // Da die Response aber vom pages.dev-Worker kommt,
      // wird der Cookie automatisch für pages.dev gesetzt,
      // sofern kein Domain-Attribut vorhanden ist.
      //
      // Wir entfernen deshalb vorsichtshalber ein eventuell
      // vorhandenes Domain-Attribut.
      const rewritten = cookie.replace(
        /;\s*Domain=[^;]+/gi,
        ""
      );

      output.append("set-cookie", rewritten);
    }
  }

  return output;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (!shouldProxy(url.pathname)) {
      return env.ASSETS.fetch(request);
    }

    const backendUrl = new URL(
      url.pathname.replace(/^\/api/, ""),
      BACKEND_URL
    );

    backendUrl.search = url.search;

    const headers = new Headers(request.headers);

    // Browser-Cookie an Backend weiterreichen.
    const cookie = request.headers.get("Cookie");

    if (cookie) {
      headers.set("Cookie", cookie);
    }

    // Host darf nicht auf pages.dev bleiben.
    headers.set("Host", new URL(BACKEND_URL).host);

    const backendRequest = new Request(
      backendUrl.toString(),
      {
        method: request.method,
        headers,
        body:
          request.method === "GET" ||
          request.method === "HEAD"
            ? undefined
            : request.body,
        redirect: "manual"
      }
    );

    const backendResponse = await fetch(backendRequest);

    const responseHeaders =
      rewriteSetCookie(backendResponse.headers);

    return new Response(
      backendResponse.body,
      {
        status: backendResponse.status,
        statusText: backendResponse.statusText,
        headers: responseHeaders
      }
    );
  }
};