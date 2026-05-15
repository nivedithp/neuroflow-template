"use client";

import { motion } from "framer-motion";
import { heroContent } from "@/constants/content";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 md:pt-40">

      {/* Ambient Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[120px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[1.05fr_0.95fr]"
      >

        {/* LEFT */}
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm text-yellow-200 backdrop-blur-xl">

            {heroContent.badge}

          </div>

          {/* Heading */}
          <h1 className="text-5xl font-black leading-[0.9] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[7.5rem]">

            AI systems
            <br />

            built for
            <br />

            <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">

              enterprise scale

            </span>

          </h1>

          {/* Description */}
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-zinc-400 md:text-xl">

            Deploy neural operations, monitor autonomous infrastructure, and orchestrate intelligent enterprise systems from one unified command layer.

          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">

            <button className="rounded-2xl bg-yellow-400 px-8 py-4 font-medium text-black transition-all duration-300 hover:scale-[1.02] hover:bg-yellow-300 active:scale-[0.98]">

              {heroContent.primaryButton}

            </button>

            <button className="rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-4 font-medium backdrop-blur-xl transition-all duration-300 hover:border-yellow-500/20 hover:bg-white/[0.06] active:scale-[0.98]">

              {heroContent.secondaryButton}

            </button>

          </div>

          {/* Stats */}
          <div className="mt-20 flex flex-wrap gap-12">

            <div>

              <h3 className="text-4xl font-bold md:text-5xl">
                99.99%
              </h3>

              <p className="mt-3 text-zinc-500">
                Operational Sync
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-bold md:text-5xl">
                2.4M+
              </h3>

              <p className="mt-3 text-zinc-500">
                Neural Operations
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-bold md:text-5xl">
                148+
              </h3>

              <p className="mt-3 text-zinc-500">
                Enterprise Systems
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative">

          {/* Glow */}
          <div className="absolute inset-0 rounded-[40px] bg-yellow-500/10 blur-3xl" />

          {/* Dashboard */}
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl transition duration-500 hover:border-yellow-500/20">

            {/* Top */}
            <div className="mb-8 flex items-center justify-between">

              <div>

                <p className="text-sm text-zinc-500">
                  AI Command Layer
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  Neural Operations
                </h3>

              </div>

              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-400">

                Systems Online

              </div>

            </div>

            {/* Chart */}
            <div className="relative h-[360px] overflow-hidden rounded-[32px] border border-white/10 bg-[#0A0E1D] p-6">

              {/* Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

              {/* Glow */}
              <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

              {/* SVG */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 800 300"
                fill="none"
              >

                <path
                  d="M0 240 C120 220 180 140 300 170 C420 200 520 80 620 100 C720 120 760 60 800 40"
                  stroke="#F5D76E"
                  strokeWidth="6"
                  strokeLinecap="round"
                />

                {/* Area */}
                <path
                  d="M0 240 C120 220 180 140 300 170 C420 200 520 80 620 100 C720 120 760 60 800 40 V300 H0 Z"
                  fill="url(#paint0_linear)"
                  opacity="0.15"
                />

                <defs>

                  <linearGradient id="paint0_linear">

                    <stop stopColor="#F5D76E" />

                    <stop offset="1" stopColor="#C9A227" />

                  </linearGradient>

                </defs>

              </svg>

              {/* Bottom */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">

                <div>

                  <p className="text-sm text-zinc-500">
                    Operational Growth
                  </p>

                  <h4 className="mt-1 text-2xl font-bold">
                    +248%
                  </h4>

                </div>

                <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-200">

                  Global Sync

                </div>

              </div>

            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}