"use client";

export default function SecurityLayer() {
  return (
    <section className="relative overflow-hidden px-6 py-40">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#F5D76E08,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-24 text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-300">

            Security Layer

          </p>

          <h2 className="mx-auto max-w-5xl text-5xl font-bold leading-tight md:text-7xl">

            Enterprise-grade AI security infrastructure

          </h2>

        </div>

        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-3">

          {/* LEFT */}
          <div className="lg:col-span-2 rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">

            {/* Top */}
            <div className="mb-10 flex items-center justify-between">

              <div>

                <p className="text-sm text-zinc-500">
                  Security Matrix
                </p>

                <h3 className="mt-2 text-4xl font-bold">
                  Quantum Protection
                </h3>

              </div>

              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-400">

                Protected

              </div>

            </div>

            {/* Main Visual */}
            <div className="relative flex h-[420px] items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-[#0A0E1D]">

              {/* Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:50px_50px]" />

              {/* Glow */}
              <div className="absolute h-[240px] w-[240px] rounded-full bg-yellow-500/10 blur-3xl" />

              {/* Rings */}
              <div className="absolute h-[120px] w-[120px] rounded-full border border-yellow-400/30" />

              <div className="absolute h-[220px] w-[220px] rounded-full border border-yellow-400/20" />

              <div className="absolute h-[320px] w-[320px] rounded-full border border-yellow-400/10" />

              {/* Core */}
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-yellow-400/20 bg-yellow-500/10">

                <div className="h-6 w-6 rounded-full bg-yellow-300 shadow-[0_0_30px_#F5D76E]" />

              </div>

              {/* Floating Indicators */}
              <div className="absolute left-[22%] top-[24%] rounded-2xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl">

                Encryption Active

              </div>

              <div className="absolute right-[18%] top-[32%] rounded-2xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl">

                AI Firewall Online

              </div>

              <div className="absolute bottom-[20%] left-[25%] rounded-2xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl">

                Threat Detection Enabled

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {/* Card */}
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">

              <p className="text-zinc-500">
                Threat Detection
              </p>

              <h3 className="mt-4 text-5xl font-bold">
                24/7
              </h3>

              <div className="mt-6 flex items-center gap-3">

                <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_20px_#4ade80]" />

                <p className="text-sm text-zinc-500">
                  Monitoring active
                </p>

              </div>

            </div>

            {/* Card */}
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">

              <p className="text-zinc-500">
                Infrastructure Status
              </p>

              <h3 className="mt-4 text-5xl font-bold">
                Secure
              </h3>

              <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">

                <div className="h-full w-[95%] rounded-full bg-yellow-400" />

              </div>

            </div>

            {/* Card */}
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">

              <p className="text-zinc-500">
                AI Integrity
              </p>

              <h3 className="mt-4 text-5xl font-bold">
                99.9%
              </h3>

              <div className="mt-6 flex gap-2">

                <div className="h-3 w-20 rounded-full bg-yellow-400" />
                <div className="h-3 w-10 rounded-full bg-yellow-300/30" />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}