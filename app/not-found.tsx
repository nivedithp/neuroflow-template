"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  Sparkles,
  ArrowLeft,
  TriangleAlert,
} from "lucide-react";

export default function NotFoundPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-6 text-white">

      {/* Glow */}
      <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="absolute bottom-[-160px] right-[-160px] h-[520px] w-[520px] rounded-full bg-yellow-300/10 blur-3xl" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Card */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="relative z-10 w-full max-w-2xl rounded-[40px] border border-white/10 bg-white/[0.03] p-12 text-center backdrop-blur-2xl"
      >

        {/* Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[32px] bg-yellow-500/10">

          <TriangleAlert className="h-12 w-12 text-yellow-300" />

        </div>

        {/* Badge */}
        <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm text-yellow-200">

          <Sparkles className="h-4 w-4" />

          Route Not Found

        </div>

        {/* Heading */}
        <h1 className="mt-10 text-7xl font-bold md:text-8xl">

          404

        </h1>

        <h2 className="mt-6 text-4xl font-bold">

          Infrastructure Route Missing

        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-500">

          The requested enterprise route could not be located inside
          the NeuroFlow infrastructure network.

        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            href="/"
            className="flex items-center justify-center gap-3 rounded-2xl bg-yellow-400 px-8 py-5 font-medium text-black transition hover:scale-[1.02] hover:bg-yellow-300"
          >

            <ArrowLeft className="h-5 w-5" />

            Return Home

          </Link>

          <Link
            href="/dashboard"
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-5 transition hover:border-yellow-500/20 hover:bg-white/[0.06]"
          >

            Open Dashboard

          </Link>

        </div>

      </motion.div>

    </main>
  );
}