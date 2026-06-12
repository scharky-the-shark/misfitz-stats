import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  
  if (
    pathname.startsWith("/unsupported-device") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/blocked.png")
  ) {
    return NextResponse.next();
  }

const ua = request.headers.get("user-agent") || "";

const isMobile =
  /Android|iPhone|iPod|Mobile|Tablet|Opera Mini|IEMobile/i.test(ua);

const isiPadDesktopMode =
  ua.includes("Macintosh") &&
  ua.includes("Safari") &&
  ua.includes("AppleWebKit");

if (isMobile || isiPadDesktopMode) {
  return NextResponse.redirect(
    new URL("/unsupported-device", request.url)
  );
}
console.log(
  request.headers.get("user-agent")
);
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};