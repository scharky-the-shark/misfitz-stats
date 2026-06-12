import Image from "next/image";

export default function UnsupportedDevicePage() {
    
  return (
    <main
      className="
        fixed
        inset-0
        z-[9999]
        flex
        flex-col
        items-center
        justify-center
        bg-[#0B0F19]
        text-white
        px-6
        text-center
      "
    >
      <Image
        src="/blocked.png"
        alt="Unsupported Device"
        width={450}
        height={450}
        priority
      />

      <h1 className="mt-8 text-4xl font-black">
        Mobile & Tablet Access Blocked
      </h1>

      <p className="mt-4 max-w-xl text-white/70">
        Misfitz Stats is currently designed for desktop devices.
        Due to the current website structure, smartphones and tablets
        are not supported.
      </p>

      <p className="mt-3 text-sm text-white/50">
        Please visit using a desktop or laptop computer.
      </p>
    </main>
  );
}