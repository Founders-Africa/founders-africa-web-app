"use client";

import Link from "next/link";
import { useWaitlistModal } from "@/context/WaitlistContext";

export default function Hero() {
  const { openWaitlistModal } = useWaitlistModal();

  return (
    <section
      className="relative w-full min-h-[88svh] overflow-hidden text-white"
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.2)
          ),
          url('/images/hero-image.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto flex min-h-[88svh] w-full max-w-7xl flex-col justify-center px-6 py-16 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          <h1 className="max-w-4xl text-4xl font-medium leading-none tracking-tight sm:text-6xl lg:text-7xl">
            Africa&apos;s next generation of founders <span className="text-primary">start here.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base font-light leading-7 text-white/90 sm:text-lg lg:text-xl">
            We help ambitious African founders build durable, profitable companies
            with practical support, direct investment, and investor access.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#how-we-invest"
              className="rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-black cursor-pointer hover:brightness-125 sm:px-10 sm:py-4 sm:text-lg"
            >
              How We Invest
            </Link>
            <button
              onClick={openWaitlistModal}
              className="rounded-xl border-2 border-white px-6 py-3.5 text-sm font-medium cursor-pointer hover:shadow-[0_0_15px_rgba(255,255,255,1)] sm:px-10 sm:py-4 sm:text-lg"
            >
              Meet Founders Africa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

