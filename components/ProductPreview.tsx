"use client";

import { motion } from "framer-motion";

export default function ProductPreview() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-40">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#F5D76E08,transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-7xl"
      >

        {/* Heading */}
        <div className="mb-20 max-w-4xl">

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-300">

            Product Interface

          </p>

          <h2 className="text-5xl font-bold leading-tight md:text-7xl">

            Operational intelligence designed for enterprise control

          </h2>

        </div>

        {/* Dashboard */}
        <div className="overflow-hidden rounded-[40px] border border-white/10 bg-[#0A0E1D]/80 shadow-[0_0_100px_rgba(245,215,110,0.06)] backdrop-blur-2xl">

          {/* Topbar */}
          <div className="flex items-center justify-between border-b border-white/10 px-8 py-5">

            <div className="flex items-center gap-3">

              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />

            </div>

            <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-200">

              Enterprise Node Active

            </div>

          </div>

          {/* Main */}
          <div className="grid lg:grid-cols-[260px_1fr]">

            {/* Sidebar */}
            <div className="border-r border-white/10 bg-black/20 p-6">

              <div className="mb-10">

                <h3 className="text-2xl font-bold">
                  NeuroFlow
                </h3>

                <p className="mt-1 text-sm text-zinc-500">
                  AI Command Center
                </p>

              </div>

              <div className="space-y-3">

                {[
                  "Neural Operations",
                  "Infrastructure",
                  "Telemetry",
                  "AI Agents",
                  "Security Layer",
                  "Analytics",
                ].map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-2xl px-4 py-3 text-sm transition ${
                      index === 0
                        ? "border border-yellow-500/20 bg-yellow-500/10 text-yellow-200"
                        : "text-zinc-400 hover:bg-white/[0.03]"
                    }`}
                  >

                    {item}

                  </div>
                ))}

              </div>

            </div>

            {/* Main Content */}
            <div className="p-8">

              {/* Top Analytics */}
              <div className="grid gap-6 md:grid-cols-3">

                {/* Card */}
                <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 transition duration-500 hover:-translate-y-1 hover:border-yellow-500/20">

                  <div className="flex items-start justify-between">

                    <div>

                      <p className="text-zinc-500">
                        Active Nodes
                      </p>

                      <h3 className="mt-3 text-4xl font-bold">
                        2.4M+
                      </h3>

                    </div>

                    <div className="rounded-xl bg-emerald-400/10 px-3 py-1 text-xs text-emerald-400">

                      +18%

                    </div>

                  </div>

                  <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">

                    <div className="h-full w-[82%] rounded-full bg-yellow-400" />

                  </div>

                </div>

                {/* Card */}
                <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 transition duration-500 hover:-translate-y-1 hover:border-yellow-500/20">

                  <div className="flex items-start justify-between">

                    <div>

                      <p className="text-zinc-500">
                        Throughput
                      </p>

                      <h3 className="mt-3 text-4xl font-bold">
                        84K/s
                      </h3>

                    </div>

                    <div className="rounded-xl bg-yellow-500/10 px-3 py-1 text-xs text-yellow-200">

                      Stable

                    </div>

                  </div>

                  <div className="mt-6 flex gap-2">

                    <div className="h-12 w-full rounded-full bg-yellow-400/80" />
                    <div className="h-8 w-full rounded-full bg-yellow-300/30" />
                    <div className="h-16 w-full rounded-full bg-yellow-200/20" />
                    <div className="h-10 w-full rounded-full bg-yellow-400/60" />

                  </div>

                </div>

                {/* Card */}
                <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 transition duration-500 hover:-translate-y-1 hover:border-yellow-500/20">

                  <div className="flex items-start justify-between">

                    <div>

                      <p className="text-zinc-500">
                        Infrastructure
                      </p>

                      <h3 className="mt-3 text-4xl font-bold">
                        Secure
                      </h3>

                    </div>

                    <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_20px_#4ade80]" />

                  </div>

                  <div className="mt-6 space-y-3">

                    <div className="flex items-center justify-between text-sm">

                      <span className="text-zinc-500">
                        Encryption
                      </span>

                      <span className="text-zinc-300">
                        Active
                      </span>

                    </div>

                    <div className="flex items-center justify-between text-sm">

                      <span className="text-zinc-500">
                        AI Firewall
                      </span>

                      <span className="text-zinc-300">
                        Enabled
                      </span>

                    </div>

                    <div className="flex items-center justify-between text-sm">

                      <span className="text-zinc-500">
                        Telemetry Sync
                      </span>

                      <span className="text-zinc-300">
                        99.99%
                      </span>

                    </div>

                  </div>

                </div>

              </div>

              {/* Live Activity Feed */}
              <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">

                {/* Left */}
                <div className="rounded-[32px] border border-white/10 bg-black/20 p-8">

                  <div className="mb-8 flex items-center justify-between">

                    <div>

                      <p className="text-sm text-zinc-500">
                        Operational Activity
                      </p>

                      <h3 className="mt-2 text-3xl font-bold">
                        Live AI Systems
                      </h3>

                    </div>

                    <div className="flex items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-400">

                      <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_#4ade80]" />

                      Live

                    </div>

                  </div>

                  {/* Feed */}
                  <div className="space-y-4">

                    {[
                      "Neural synchronization completed",
                      "Telemetry infrastructure optimized",
                      "AI security verification successful",
                      "Distributed node deployment active",
                      "Enterprise systems operational",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4 transition duration-500 hover:border-yellow-500/20"
                      >

                        <div className="flex items-center gap-4">

                          <div className="h-3 w-3 rounded-full bg-yellow-300 shadow-[0_0_20px_#F5D76E]" />

                          <p className="text-sm text-zinc-300">
                            {item}
                          </p>

                        </div>

                        <span className="text-xs text-zinc-500">
                          just now
                        </span>

                      </div>
                    ))}

                  </div>

                </div>

                {/* Right */}
                <div className="rounded-[32px] border border-white/10 bg-black/20 p-8">

                  <p className="text-sm text-zinc-500">
                    Infrastructure Status
                  </p>

                  <h3 className="mt-2 text-3xl font-bold">
                    Global Sync
                  </h3>

                  {/* Ring */}
                  <div className="relative mx-auto mt-10 flex h-[220px] w-[220px] items-center justify-center rounded-full border border-yellow-500/20">

                    <div className="absolute h-[170px] w-[170px] rounded-full border border-yellow-400/20" />

                    <div className="absolute h-[120px] w-[120px] rounded-full border border-yellow-300/20" />

                    <div className="h-20 w-20 rounded-full bg-yellow-400/10 shadow-[0_0_60px_rgba(245,215,110,0.25)]" />

                    <div className="absolute text-center">

                      <h4 className="text-4xl font-bold">
                        99%
                      </h4>

                      <p className="mt-1 text-sm text-zinc-500">
                        Synced
                      </p>

                    </div>

                  </div>

                  {/* Bottom */}
                  <div className="mt-10 space-y-4">

                    <div className="flex items-center justify-between text-sm">

                      <span className="text-zinc-500">
                        AI Regions
                      </span>

                      <span className="text-zinc-300">
                        18 Active
                      </span>

                    </div>

                    <div className="flex items-center justify-between text-sm">

                      <span className="text-zinc-500">
                        Autonomous Agents
                      </span>

                      <span className="text-zinc-300">
                        148 Online
                      </span>

                    </div>

                    <div className="flex items-center justify-between text-sm">

                      <span className="text-zinc-500">
                        Operational Integrity
                      </span>

                      <span className="text-zinc-300">
                        Stable
                      </span>

                    </div>

                  </div>

                </div>

              </div>

              {/* Chart */}
              <div className="relative mt-8 overflow-hidden rounded-[32px] border border-white/10 bg-black/20 p-8">

                {/* Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

                {/* Glow */}
                <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

                <div className="relative z-10 mb-10 flex items-center justify-between">

                  <div>

                    <p className="text-sm text-zinc-500">
                      Operational Analytics
                    </p>

                    <h3 className="mt-2 text-3xl font-bold">
                      Neural Throughput
                    </h3>

                  </div>

                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-400">

                    +248%

                  </div>

                </div>

                {/* Chart */}
                <div className="relative h-[280px]">

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

                </div>

              </div>

            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}