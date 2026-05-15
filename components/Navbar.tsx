"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#050816]/80 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">

            <Sparkles className="h-6 w-6 text-yellow-300" />

          </div>

          <div>

            <h2 className="text-2xl font-bold tracking-tight">
              NeuroFlow
            </h2>

            <p className="text-sm text-zinc-500">
              AI Command Center
            </p>

          </div>

        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 text-sm text-zinc-400 md:flex">

          <a
            href="#platform"
            className="transition hover:text-white"
          >
            Platform
          </a>

          <a
            href="#solutions"
            className="transition hover:text-white"
          >
            Solutions
          </a>

          <a
            href="#enterprise"
            className="transition hover:text-white"
          >
            Enterprise
          </a>

          <a
            href="#pricing"
            className="transition hover:text-white"
          >
            Pricing
          </a>

        </nav>

        {/* CTA */}
        <button className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 px-6 py-3 font-medium text-yellow-200 transition-all duration-300 hover:scale-[1.02] hover:bg-yellow-500/20 active:scale-[0.98]">

          Request Demo

        </button>

      </div>

    </header>
  );
}