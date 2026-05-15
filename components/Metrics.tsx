"use client";

import { motion } from "framer-motion";

export default function Metrics() {
  return (
    <section className="px-6 py-32">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl"
      >

        {/* Heading */}
        <div className="mb-20 text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-300">

            Enterprise Scale

          </p>

          <h2 className="mx-auto max-w-4xl text-5xl font-bold leading-tight md:text-7xl">

            Trusted by modern AI enterprises

          </h2>

        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {/* Card */}
          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-yellow-500/20 hover:bg-white/[0.05]">

            <p className="text-zinc-500">
              Neural Nodes
            </p>

            <h3 className="mt-4 text-5xl font-bold">
              2.4M+
            </h3>

            <div className="mt-6 h-[2px] w-full bg-gradient-to-r from-yellow-400 to-transparent" />

          </div>

          {/* Card */}
          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-yellow-500/20 hover:bg-white/[0.05]">

            <p className="text-zinc-500">
              Autonomous Agents
            </p>

            <h3 className="mt-4 text-5xl font-bold">
              148+
            </h3>

            <div className="mt-6 h-[2px] w-full bg-gradient-to-r from-yellow-400 to-transparent" />

          </div>

          {/* Card */}
          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-yellow-500/20 hover:bg-white/[0.05]">

            <p className="text-zinc-500">
              Global Regions
            </p>

            <h3 className="mt-4 text-5xl font-bold">
              18
            </h3>

            <div className="mt-6 h-[2px] w-full bg-gradient-to-r from-yellow-400 to-transparent" />

          </div>

          {/* Card */}
          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-yellow-500/20 hover:bg-white/[0.05]">

            <p className="text-zinc-500">
              Telemetry Sync
            </p>

            <h3 className="mt-4 text-5xl font-bold">
              99.99%
            </h3>

            <div className="mt-6 h-[2px] w-full bg-gradient-to-r from-yellow-400 to-transparent" />

          </div>

        </div>

      </motion.div>

    </section>
  );
}