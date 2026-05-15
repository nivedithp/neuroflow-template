"use client";

export default function GlobalNetwork() {
  return (
    <section className="relative overflow-hidden px-6 py-40">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#C9A22710,transparent_60%)]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">

        {/* LEFT */}
        <div>

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-300">

            Global AI Network

          </p>

          <h2 className="max-w-3xl text-5xl font-bold leading-tight md:text-7xl">

            Enterprise AI infrastructure operating worldwide

          </h2>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">

            Monitor neural operations, AI deployments, and intelligent systems across globally distributed enterprise infrastructure.

          </p>

          {/* Metrics */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2">

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">

              <p className="text-zinc-500">
                Active Regions
              </p>

              <h3 className="mt-3 text-4xl font-bold">
                18
              </h3>

            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">

              <p className="text-zinc-500">
                AI Operations
              </p>

              <h3 className="mt-3 text-4xl font-bold">
                2.4M+
              </h3>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative">

          {/* Glow */}
          <div className="absolute inset-0 rounded-[40px] bg-yellow-500/10 blur-3xl" />

          {/* Main Container */}
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl">

            {/* Top */}
            <div className="mb-10 flex items-center justify-between">

              <div>

                <p className="text-sm text-zinc-500">
                  Neural Infrastructure
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  Global Operations
                </h3>

              </div>

              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-400">

                All Systems Online

              </div>

            </div>

            {/* Network Area */}
            <div className="relative flex h-[420px] items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-[#0A0E1D]">

              {/* Radar Rings */}
              <div className="absolute h-[120px] w-[120px] rounded-full border border-yellow-500/20" />

              <div className="absolute h-[220px] w-[220px] rounded-full border border-yellow-500/10" />

              <div className="absolute h-[320px] w-[320px] rounded-full border border-yellow-500/5" />

              {/* Lines */}
              <div className="absolute h-[2px] w-[300px] rotate-45 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />

              <div className="absolute h-[2px] w-[260px] -rotate-45 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />

              <div className="absolute h-[2px] w-[340px] bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />

              {/* Center Core */}
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-yellow-500/20 bg-yellow-500/10 shadow-[0_0_80px_rgba(245,215,110,0.25)]">

                <div className="h-5 w-5 rounded-full bg-yellow-300 shadow-[0_0_30px_#F5D76E]" />

              </div>

              {/* Floating Nodes */}
              <div className="absolute left-[18%] top-[20%] h-4 w-4 rounded-full bg-yellow-400 shadow-[0_0_25px_#F5D76E]" />

              <div className="absolute right-[20%] top-[28%] h-3 w-3 rounded-full bg-yellow-300 shadow-[0_0_20px_#F5D76E]" />

              <div className="absolute bottom-[22%] left-[30%] h-4 w-4 rounded-full bg-yellow-200 shadow-[0_0_20px_#F5D76E]" />

              <div className="absolute bottom-[18%] right-[28%] h-5 w-5 rounded-full bg-yellow-400 shadow-[0_0_30px_#F5D76E]" />

              {/* Scan Effect */}
              <div className="absolute h-[420px] w-[2px] rotate-12 bg-gradient-to-b from-transparent via-yellow-400/30 to-transparent" />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}