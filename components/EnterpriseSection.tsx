"use client";

import { motion } from "framer-motion";

export default function EnterpriseSection() {
  return (
    <section
      id="platform"
      className="relative px-6 py-24 md:py-32"
    >

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#C9A22710,transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2"
      >

        {/* LEFT */}
        <div>

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-300">

            Enterprise Infrastructure

          </p>

          <h2 className="max-w-3xl text-5xl font-bold leading-tight md:text-7xl">

            Built for high-performance AI operations

          </h2>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">

            NeuroFlow provides enterprise-grade infrastructure designed for modern AI systems, automation pipelines, and intelligent business operations.

          </p>

          {/* Features */}
          <div className="mt-12 space-y-6">

            <div className="flex gap-4">

              <div className="mt-1 h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_20px_#F5D76E]" />

              <div>

                <h4 className="text-xl font-semibold">
                  Intelligent Automation
                </h4>

                <p className="mt-2 text-zinc-500">
                  Automate workflows with scalable enterprise AI infrastructure.
                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <div className="mt-1 h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_20px_#F5D76E]" />

              <div>

                <h4 className="text-xl font-semibold">
                  Real-Time Analytics
                </h4>

                <p className="mt-2 text-zinc-500">
                  Monitor performance and operational intelligence instantly.
                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <div className="mt-1 h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_20px_#F5D76E]" />

              <div>

                <h4 className="text-xl font-semibold">
                  Enterprise Security
                </h4>

                <p className="mt-2 text-zinc-500">
                  Built with enterprise-grade compliance and protection systems.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative">

          {/* Glow */}
          <div className="absolute inset-0 rounded-[40px] bg-yellow-500/10 blur-3xl" />

          {/* Main UI */}
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-yellow-500/20 hover:bg-white/[0.05]">

            {/* Header */}
            <div className="mb-8 flex items-center justify-between">

              <div>

                <p className="text-sm text-zinc-500">
                  AI Infrastructure
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  Enterprise Monitoring
                </h3>

              </div>

              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-400">

                Secure

              </div>

            </div>

            {/* Large Box */}
            <div className="rounded-[32px] border border-white/10 bg-[#0A0E1D] p-6">

              {/* Rows */}
              <div className="space-y-6">

                <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-black/20 p-5">

                  <div>

                    <p className="text-zinc-500">
                      Neural Processing
                    </p>

                    <h4 className="mt-1 text-2xl font-bold">
                      98ms Response
                    </h4>

                  </div>

                  <div className="h-3 w-24 overflow-hidden rounded-full bg-white/10">

                    <div className="h-full w-[90%] rounded-full bg-yellow-400" />

                  </div>

                </div>

                <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-black/20 p-5">

                  <div>

                    <p className="text-zinc-500">
                      Global Availability
                    </p>

                    <h4 className="mt-1 text-2xl font-bold">
                      18 Regions
                    </h4>

                  </div>

                  <div className="flex gap-2">

                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-300" />
                    <div className="h-3 w-3 rounded-full bg-yellow-200" />

                  </div>

                </div>

                <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-black/20 p-5">

                  <div>

                    <p className="text-zinc-500">
                      AI Workflows
                    </p>

                    <h4 className="mt-1 text-2xl font-bold">
                      12,842 Active
                    </h4>

                  </div>

                  <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-yellow-200">

                    Live

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}