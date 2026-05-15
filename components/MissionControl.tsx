"use client";

export default function MissionControl() {
  return (
    <section className="relative overflow-hidden px-6 py-40">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#F5D76E08,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-24 text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-300">

            Mission Control

          </p>

          <h2 className="mx-auto max-w-5xl text-5xl font-bold leading-tight md:text-7xl">

            Monitor enterprise AI systems in real time

          </h2>

        </div>

        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-3">

          {/* Left Large */}
          <div className="lg:col-span-2 rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">

            {/* Top */}
            <div className="mb-10 flex items-center justify-between">

              <div>

                <p className="text-sm text-zinc-500">
                  Neural Activity
                </p>

                <h3 className="mt-2 text-4xl font-bold">
                  Global AI Telemetry
                </h3>

              </div>

              <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-200">

                Live Stream

              </div>

            </div>

            {/* Big Visual */}
            <div className="relative h-[420px] overflow-hidden rounded-[32px] border border-white/10 bg-[#0A0E1D]">

              {/* Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:50px_50px]" />

              {/* Glow */}
              <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

              {/* Horizontal Lines */}
              <div className="absolute left-0 top-[30%] h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />

              <div className="absolute left-0 top-[60%] h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent" />

              {/* Vertical Lines */}
              <div className="absolute left-[30%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-yellow-400/10 to-transparent" />

              <div className="absolute left-[70%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-yellow-400/10 to-transparent" />

              {/* Center Core */}
              <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-yellow-500/20 bg-yellow-500/10">

                <div className="h-5 w-5 rounded-full bg-yellow-300 shadow-[0_0_30px_#F5D76E]" />

              </div>

              {/* Nodes */}
              <div className="absolute left-[20%] top-[20%] h-4 w-4 rounded-full bg-yellow-300 shadow-[0_0_20px_#F5D76E]" />

              <div className="absolute right-[22%] top-[30%] h-3 w-3 rounded-full bg-yellow-200 shadow-[0_0_20px_#F5D76E]" />

              <div className="absolute bottom-[24%] left-[28%] h-4 w-4 rounded-full bg-yellow-400 shadow-[0_0_25px_#F5D76E]" />

              <div className="absolute bottom-[18%] right-[20%] h-5 w-5 rounded-full bg-yellow-300 shadow-[0_0_25px_#F5D76E]" />

              {/* Scan Beam */}
              <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-yellow-400/30 to-transparent" />

            </div>

          </div>

          {/* Right Side */}
          <div className="space-y-6">

            {/* Status */}
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">

              <p className="text-zinc-500">
                Operational Status
              </p>

              <h3 className="mt-4 text-5xl font-bold">
                99.99%
              </h3>

              <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">

                <div className="h-full w-[99%] rounded-full bg-yellow-400" />

              </div>

            </div>

            {/* Throughput */}
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">

              <p className="text-zinc-500">
                AI Throughput
              </p>

              <h3 className="mt-4 text-5xl font-bold">
                84K/s
              </h3>

              <div className="mt-6 flex gap-2">

                <div className="h-3 w-24 rounded-full bg-yellow-400" />
                <div className="h-3 w-14 rounded-full bg-yellow-300/40" />

              </div>

            </div>

            {/* Security */}
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">

              <p className="text-zinc-500">
                Enterprise Security
              </p>

              <h3 className="mt-4 text-3xl font-bold">
                Quantum Protected
              </h3>

              <div className="mt-6 flex items-center gap-3">

                <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_20px_#4ade80]" />

                <p className="text-sm text-zinc-500">
                  All systems secured
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}