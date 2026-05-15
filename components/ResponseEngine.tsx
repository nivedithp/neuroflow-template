"use client";

export default function ResponseEngine() {
  return (
    <section className="relative overflow-hidden px-6 py-40">

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#F5D76E08,transparent_60%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">

        {/* LEFT UI */}
        <div className="relative">

          {/* Glow */}
          <div className="absolute inset-0 rounded-[40px] bg-yellow-500/10 blur-3xl" />

          {/* Terminal */}
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#0A0E1D] p-8 backdrop-blur-2xl">

            {/* Top Bar */}
            <div className="mb-8 flex items-center gap-3">

              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />

            </div>

            {/* Terminal Content */}
            <div className="space-y-6 font-mono text-sm">

              <div className="text-zinc-500">
                Initializing enterprise neural systems...
              </div>

              <div className="text-yellow-300">
                {'>'} AI orchestration engine active
              </div>

              <div className="text-yellow-300">
                {'>'} Deploying distributed inference systems
              </div>

              <div className="text-yellow-300">
                {'>'} Monitoring global infrastructure nodes
              </div>

              <div className="text-yellow-300">
                {'>'} Enterprise security verification complete
              </div>

              <div className="text-emerald-400">
                {'>'} All systems operational
              </div>

            </div>

            {/* Bottom Stats */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">

                <p className="text-xs text-zinc-500">
                  Response Time
                </p>

                <h4 className="mt-2 text-2xl font-bold">
                  98ms
                </h4>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">

                <p className="text-xs text-zinc-500">
                  Neural Capacity
                </p>

                <h4 className="mt-2 text-2xl font-bold">
                  84K/s
                </h4>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">

                <p className="text-xs text-zinc-500">
                  Infrastructure
                </p>

                <h4 className="mt-2 text-2xl font-bold">
                  Global
                </h4>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div>

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-300">

            AI Response Engine

          </p>

          <h2 className="max-w-3xl text-5xl font-bold leading-tight md:text-7xl">

            Enterprise AI infrastructure operating in real time

          </h2>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">

            NeuroFlow continuously analyzes workflows, distributes intelligent operations, and monitors enterprise systems across global infrastructure.

          </p>

          {/* Features */}
          <div className="mt-12 space-y-8">

            <div className="flex gap-5">

              <div className="mt-1 h-3 w-3 rounded-full bg-yellow-300 shadow-[0_0_20px_#F5D76E]" />

              <div>

                <h4 className="text-2xl font-semibold">
                  Real-Time Intelligence
                </h4>

                <p className="mt-2 text-zinc-500">
                  Process and optimize enterprise operations instantly.
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <div className="mt-1 h-3 w-3 rounded-full bg-yellow-300 shadow-[0_0_20px_#F5D76E]" />

              <div>

                <h4 className="text-2xl font-semibold">
                  Distributed Infrastructure
                </h4>

                <p className="mt-2 text-zinc-500">
                  Deploy AI systems globally with enterprise-grade scalability.
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
                  Continuously monitor and improve AI workflows automatically.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}