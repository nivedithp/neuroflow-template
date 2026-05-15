"use client";

import Link from "next/link";

import Balancer from "react-wrap-balancer";

import { motion } from "framer-motion";

import {
  Sparkles,
  ArrowRight,
  Shield,
  Cpu,
  Globe,
  Activity,
} from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "AI Compute",
    desc: "Global neural compute infrastructure with autonomous scaling.",
  },
  {
    icon: Shield,
    title: "Security Grid",
    desc: "Enterprise-grade AI protection and predictive threat systems.",
  },
  {
    icon: Globe,
    title: "Global Network",
    desc: "Distributed infrastructure across worldwide deployment regions.",
  },
  {
    icon: Activity,
    title: "Live Monitoring",
    desc: "Real-time analytics and operational telemetry systems.",
  },
];

const stats = [
  {
    value: "2.4M+",
    label: "AI Requests / Min",
  },
  {
    value: "182",
    label: "Global Regions",
  },
  {
    value: "99.99%",
    label: "Infrastructure Uptime",
  },
  {
    value: "84K/s",
    label: "Neural Throughput",
  },
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-[#050816] text-white">

      {/* Glow Effects */}
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

      {/* Navbar */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-10">

        {/* Logo */}
        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">

            <Sparkles className="h-7 w-7 text-yellow-300" />

          </div>

          <div>

            <h2 className="text-2xl font-bold">
              NeuroFlow
            </h2>

            <p className="text-sm text-zinc-500">
              AI Infrastructure Platform
            </p>

          </div>

        </div>

        {/* Navigation */}
        <div className="flex items-center gap-4">

          <Link
            href="/auth"
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-3 transition hover:border-yellow-500/20 hover:bg-white/[0.06]"
          >

            Login

          </Link>

          <Link
            href="/dashboard"
            className="rounded-2xl bg-yellow-400 px-6 py-3 font-medium text-black transition hover:bg-yellow-300"
          >

            Open Platform

          </Link>

        </div>

      </header>

      {/* Hero */}
      <section className="relative z-10 flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">

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
            duration: 0.7,
          }}
          className="max-w-6xl"
        >

          {/* Badge */}
          <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm text-yellow-200">

            <div className="h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_15px_#fde047]" />

            Enterprise AI Infrastructure

          </div>

          {/* Heading */}
          <h1 className="hero-title mt-10 text-6xl font-bold leading-tight md:text-8xl">

            <Balancer>
              Autonomous AI Infrastructure Platform
            </Balancer>

          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-zinc-400">

            Deploy, scale, monitor, and optimize enterprise-grade AI
            systems across global infrastructure networks with cinematic
            operational control.

          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/dashboard"
              className="flex items-center justify-center gap-3 rounded-2xl bg-yellow-400 px-8 py-5 font-medium text-black transition hover:scale-[1.02] hover:bg-yellow-300"
            >

              Launch Platform

              <ArrowRight className="h-5 w-5" />

            </Link>

            <Link
              href="/analytics"
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-5 transition hover:border-yellow-500/20 hover:bg-white/[0.06]"
            >

              View Analytics

            </Link>

          </div>

        </motion.div>

      </section>

      {/* Features */}
      <section className="relative z-10 px-6 pb-24 md:px-10">

        <div className="grid gap-6 xl:grid-cols-4">

          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.08,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -6,
              }}
              className="rounded-[36px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10">

                <item.icon className="h-8 w-8 text-yellow-300" />

              </div>

              <h3 className="mt-8 text-3xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-500">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </section>

    </main>
  );
}