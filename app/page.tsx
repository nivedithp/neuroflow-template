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
import BackgroundEffects from "../components/BackgroundEffects";
import AnalyticsPreview from "../components/AnalyticsPreview";

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

      {/* Background */}
      <BackgroundEffects />

      {/* Navbar */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-10">

        {/* Logo */}
        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">

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

        {/* Nav Buttons */}
        <div className="flex items-center gap-4">

          <Link
            href="/auth"
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-3 backdrop-blur-xl transition-all duration-300 hover:border-yellow-500/20 hover:bg-white/[0.06]"
          >

            Login

          </Link>

          <Link
            href="/dashboard"
            className="button-shine rounded-2xl bg-yellow-400 px-6 py-3 font-medium text-black transition-all duration-300 hover:scale-[1.02] hover:bg-yellow-300"
          >

            Open Platform

          </Link>

        </div>

      </header>

      {/* Hero */}
      <section className="relative z-10 flex min-h-[92vh] flex-col items-center justify-center px-6 text-center">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="max-w-7xl"
        >

          {/* Badge */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.2,
            }}
            className="mx-auto inline-flex items-center gap-3 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-6 py-3 text-sm text-yellow-200 backdrop-blur-xl"
          >

            <div className="h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_20px_#fde047]" />

            Enterprise AI Infrastructure

          </motion.div>

          {/* Heading */}
          <h1 className="hero-title mt-10 text-6xl font-bold leading-tight md:text-8xl xl:text-[9rem]">

            <Balancer>
              Autonomous AI Infrastructure Platform
            </Balancer>

          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-zinc-400 md:text-2xl">

            Deploy, scale, monitor, and optimize enterprise-grade AI
            systems across global infrastructure networks with cinematic
            operational control.

          </p>

          {/* CTA */}
          <div className="mt-16 mb-24 flex flex-col justify-center gap-5 sm:flex-row">

            <Link
              href="/dashboard"
              className="button-shine flex items-center justify-center gap-3 rounded-2xl bg-yellow-400 px-10 py-5 font-medium text-black transition-all duration-300 hover:scale-[1.03] hover:bg-yellow-300"
            >

              Launch Platform

              <ArrowRight className="h-5 w-5" />

            </Link>

            <Link
              href="/analytics"
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-10 py-5 backdrop-blur-xl transition-all duration-300 hover:border-yellow-500/20 hover:bg-white/[0.06]"
            >

              View Analytics

            </Link>

          </div>

        </motion.div>

      </section>

      {/* Features */}
      <section className="relative z-10 px-6 pt-10 pb-28 md:px-10">

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
                y: -8,
                scale: 1.01,
              }}
              className="card-hover rounded-[36px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
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

      {/* Analytics */}
      <AnalyticsPreview />

      {/* Stats */}
      <section className="relative z-10 px-6 pb-28 md:px-10">

        <div className="rounded-[48px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl md:p-16">

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

            {stats.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -6,
                }}
                className="rounded-[32px] border border-white/10 bg-black/20 p-8"
              >

                <h3 className="text-5xl font-bold text-yellow-300">

                  {item.value}

                </h3>

                <p className="mt-4 text-zinc-500">

                  {item.label}

                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-10 md:px-10">

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h3 className="text-2xl font-bold">
              NeuroFlow
            </h3>

            <p className="mt-2 text-zinc-500">
              Enterprise AI Infrastructure Platform
            </p>

          </div>

          <div className="flex flex-wrap gap-6 text-zinc-500">

            <a href="#" className="transition hover:text-white">
              Platform
            </a>

            <a href="#" className="transition hover:text-white">
              Analytics
            </a>

            <a href="#" className="transition hover:text-white">
              Security
            </a>

            <a href="#" className="transition hover:text-white">
              Enterprise
            </a>

            <a href="#" className="transition hover:text-white">
              Contact
            </a>

          </div>

          <p className="text-zinc-600">
            © 2026 NeuroFlow Systems
          </p>

        </div>

      </footer>

    </main>
  );
}