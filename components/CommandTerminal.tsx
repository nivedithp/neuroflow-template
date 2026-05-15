"use client";

export default function CommandTerminal() {
  return (
    <section className="relative overflow-hidden px-6 py-40">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#F5D76E08,transparent_60%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <div>

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-300">

            AI Command Terminal

          </p>

          <h2 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">

            Control enterprise AI systems from a unified command layer

          </h2>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">

            Execute intelligent workflows, monitor neural infrastructure, and deploy autonomous enterprise operations globally.

          </p>

          {/* Features */}
          <div className="mt-14 space-y-8">

            <div className="flex gap-5">

              <div className="mt-1 h-3 w-3 rounded-full bg-yellow-300 shadow-[0_0_20px_#F5D76E]" />

              <div>

                <h4 className="text-2xl font-semibold">
                  Intelligent Deployment
                </h4>

                <p className="mt-2 text-zinc-500">
                  Deploy enterprise-scale AI systems instantly.
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <div className="mt-1 h-3 w-3 rounded-full bg-yellow-300 shadow-[0_0_20px_#F5D76E]" />

              <div>

                <h4 className="text-2xl font-semibold">
                  Neural Infrastructure
                </h4>

                <p className="mt-2 text-zinc-500">
                  Monitor AI telemetry and operational intelligence.
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <div className="mt-1 h-3 w-3 rounded-full bg-yellow-300 shadow-[0_0_20px_#F5D76E]" />

              <div>

                <h4 className="text-2xl font-semibold">
                  Autonomous Operations
                </h4>

                <p className="mt-2 text-zinc-500">
                  Optimize workflows continuously using intelligent automation.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT TERMINAL */}
        <div className="relative">

          {/* Glow */}
          <div className="absolute inset-0 rounded-[40px] bg-yellow-500/10 blur-3xl" />

          {/* Main */}
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#0A0E1D] p-8 backdrop-blur-2xl">

            {/* Top */}
            <div className="mb-8 flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />

              </div>

              <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-200">

                Enterprise Node

              </div>

            </div>

            {/* Terminal Body */}
            <div className="space-y-6 font-mono text-sm">

              <div className="text-zinc-500">
                booting enterprise neural systems...
              </div>

              <div className="text-yellow-300">
                {'>'} Initializing AI orchestration layer
              </div>

              <div className="text-yellow-300">
                {'>'} Connecting distributed infrastructure nodes
              </div>

              <div className="text-yellow-300">
                {'>'} Deploying autonomous enterprise agents
              </div>

              <div className="text-yellow-300">
                {'>'} Activating telemetry intelligence systems
              </div>

              <div className="text-emerald-400">
                {'>'} Global AI infrastructure operational
              </div>

            </div>

            {/* Bottom Panels */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                <p className="text-xs text-zinc-500">
                  Response Time
                </p>

                <h4 className="mt-2 text-2xl font-bold">
                  98ms
                </h4>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                <p className="text-xs text-zinc-500">
                  AI Capacity
                </p>

                <h4 className="mt-2 text-2xl font-bold">
                  84K/s
                </h4>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                <p className="text-xs text-zinc-500">
                  Infrastructure
                </p>

                <h4 className="mt-2 text-2xl font-bold">
                  Secure
                </h4>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}