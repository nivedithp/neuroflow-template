"use client";

import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative overflow-hidden px-6 py-40">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#F5D76E10,transparent_60%)]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-6xl overflow-hidden rounded-[48px] border border-white/10 bg-white/[0.03] px-10 py-24 text-center backdrop-blur-2xl md:px-20"
      >

        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

        {/* Content */}
        <div className="relative z-10">

          <SectionHeader
            badge="Enterprise AI Platform"
            title="Build the future of intelligent enterprise infrastructure"
            description="Deploy scalable AI systems, automate enterprise workflows, and operate global neural infrastructure from a unified control layer."
            center
          />

          {/* Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <button className="rounded-2xl bg-yellow-400 px-8 py-4 font-medium text-black transition duration-300 hover:scale-[1.02] hover:bg-yellow-300">

              Start Enterprise Platform

            </button>

            <button className="rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-4 font-medium transition duration-300 hover:border-yellow-500/20 hover:bg-white/[0.06]">

              Request Live Demo

            </button>

          </div>

          {/* Stats */}
          <div className="mt-20 grid gap-8 md:grid-cols-3">

            <div className="rounded-[28px] border border-white/10 bg-black/20 p-8 transition duration-500 hover:-translate-y-1 hover:border-yellow-500/20">

              <h3 className="text-4xl font-bold">
                99.99%
              </h3>

              <p className="mt-2 text-zinc-500">
                Infrastructure Uptime
              </p>

            </div>

            <div className="rounded-[28px] border border-white/10 bg-black/20 p-8 transition duration-500 hover:-translate-y-1 hover:border-yellow-500/20">

              <h3 className="text-4xl font-bold">
                2.4M+
              </h3>

              <p className="mt-2 text-zinc-500">
                AI Operations
              </p>

            </div>

            <div className="rounded-[28px] border border-white/10 bg-black/20 p-8 transition duration-500 hover:-translate-y-1 hover:border-yellow-500/20">

              <h3 className="text-4xl font-bold">
                148+
              </h3>

              <p className="mt-2 text-zinc-500">
                Enterprise Clients
              </p>

            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}