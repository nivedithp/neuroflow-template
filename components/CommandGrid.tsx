"use client";

import { motion } from "framer-motion";

const widgets = [
  {
    title: "Neural Sync",
    value: "99.99%",
    status: "Optimal",
  },
  {
    title: "AI Regions",
    value: "18",
    status: "Global",
  },
  {
    title: "Telemetry",
    value: "84K/s",
    status: "Stable",
  },
  {
    title: "Infrastructure",
    value: "2.4M+",
    status: "Active",
  },
];

export default function CommandGrid() {
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

        {/* Header */}
        <div className="mb-20 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          <div>

            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-300">

              Operational Intelligence

            </p>

            <h2 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">

              Real-time enterprise command systems

            </h2>

          </div>

          <p className="max-w-md text-lg leading-relaxed text-zinc-500">

            Monitor distributed infrastructure, neural synchronization, and autonomous enterprise operations globally.

          </p>

        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {widgets.map((widget, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-yellow-500/20 hover:bg-white/[0.05]"
            >

              {/* Glow */}
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-yellow-500/5 blur-3xl transition duration-500 group-hover:bg-yellow-500/10" />

              {/* Top */}
              <div className="relative z-10 flex items-start justify-between">

                <div>

                  <p className="text-sm text-zinc-500">
                    {widget.title}
                  </p>

                  <h3 className="mt-4 text-5xl font-bold">
                    {widget.value}
                  </h3>

                </div>

                <div className="flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-400">

                  <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_#4ade80]" />

                  {widget.status}

                </div>

              </div>

              {/* Bottom */}
              <div className="relative z-10 mt-10">

                <div className="h-2 overflow-hidden rounded-full bg-white/10">

                  <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500" />

                </div>

                <div className="mt-4 flex items-center justify-between text-sm">

                  <span className="text-zinc-500">
                    System Integrity
                  </span>

                  <span className="text-zinc-300">
                    Stable
                  </span>

                </div>

              </div>

            </div>
          ))}

        </div>

      </motion.div>

    </section>
  );
}