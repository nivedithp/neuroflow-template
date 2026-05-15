"use client";

import { motion } from "framer-motion";

import BackgroundEffects from "../../components/BackgroundEffects";
import CommandPalette from "../../components/CommandPalette";
import AppSidebar from "../../components/AppSidebar";
import AppTopbar from "../../components/AppTopbar";

import {
  Boxes,
  Check,
  PlugZap,
  Globe,
  Database,
  Shield,
  Cloud,
  ArrowUpRight,
} from "lucide-react";

const integrations = [
  {
    name: "AWS Infrastructure",
    desc: "Global AI compute and deployment scaling.",
    icon: Cloud,
    connected: true,
  },
  {
    name: "Stripe Payments",
    desc: "Enterprise billing and transaction systems.",
    icon: Database,
    connected: true,
  },
  {
    name: "Vercel Edge",
    desc: "Global edge infrastructure acceleration.",
    icon: Globe,
    connected: true,
  },
  {
    name: "Security Grid",
    desc: "AI-powered enterprise threat protection.",
    icon: Shield,
    connected: false,
  },
];

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">

      <BackgroundEffects />

      <CommandPalette />

      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">

        {/* Sidebar */}
        <AppSidebar active="Integrations" />

        {/* Main */}
        <section className="relative z-10 p-6 md:p-10">

          {/* Topbar */}
          <AppTopbar />

          {/* Hero */}
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
            className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          >

            <div>

              <p className="text-sm uppercase tracking-[0.35em] text-yellow-300">

                Enterprise Ecosystem

              </p>

              <h1 className="mt-4 text-5xl font-bold md:text-7xl">

                Integrations

              </h1>

            </div>

            <button className="flex items-center gap-3 rounded-2xl bg-yellow-400 px-8 py-4 font-medium text-black transition hover:scale-[1.02] hover:bg-yellow-300">

              <PlugZap className="h-5 w-5" />

              Connect Platform

            </button>

          </motion.div>

          {/* Stats */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                label: "Connected Systems",
                value: "48",
              },
              {
                label: "Global APIs",
                value: "182",
              },
              {
                label: "Infrastructure Nodes",
                value: "2.4M",
              },
              {
                label: "Security Coverage",
                value: "99.99%",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
              >

                <p className="text-zinc-500">
                  {item.label}
                </p>

                <h3 className="mt-6 text-5xl font-bold">
                  {item.value}
                </h3>

              </motion.div>
            ))}

          </div>

          {/* Integrations Grid */}
          <div className="mt-8 grid gap-6 xl:grid-cols-2">

            {integrations.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="rounded-[36px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
              >

                {/* Top */}
                <div className="flex items-start justify-between">

                  <div className="flex items-center gap-5">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10">

                      <item.icon className="h-8 w-8 text-yellow-300" />

                    </div>

                    <div>

                      <h3 className="text-2xl font-bold">
                        {item.name}
                      </h3>

                      <p className="mt-2 max-w-md text-zinc-500">
                        {item.desc}
                      </p>

                    </div>

                  </div>

                  <div
                    className={`rounded-xl px-3 py-1 text-xs ${
                      item.connected
                        ? "border border-emerald-400/20 bg-emerald-400/10 text-emerald-400"
                        : "border border-red-400/20 bg-red-400/10 text-red-400"
                    }`}
                  >

                    {item.connected ? "Connected" : "Disconnected"}

                  </div>

                </div>

                {/* Bottom */}
                <div className="mt-8 flex items-center justify-between rounded-2xl border border-white/5 bg-black/20 px-5 py-4">

                  <div className="flex items-center gap-3">

                    <Check className="h-5 w-5 text-yellow-300" />

                    <span className="text-zinc-300">
                      Enterprise synchronization active
                    </span>

                  </div>

                  <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm transition hover:border-yellow-500/20 hover:bg-white/[0.06]">

                    <ArrowUpRight className="h-4 w-4" />

                    Configure

                  </button>

                </div>

              </motion.div>
            ))}

          </div>

          {/* Footer */}
          <div className="mt-8 rounded-[40px] border border-yellow-500/20 bg-yellow-500/10 p-8 backdrop-blur-2xl">

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <p className="text-sm uppercase tracking-[0.3em] text-yellow-200">

                  Ecosystem Ready

                </p>

                <h2 className="mt-4 text-4xl font-bold">

                  Global Integration Network

                </h2>

                <p className="mt-4 max-w-2xl text-yellow-100/70">

                  Connect AI infrastructure, payment systems, deployment
                  pipelines, and enterprise-grade security layers into a
                  unified operational platform.

                </p>

              </div>

              <div className="flex h-24 w-24 items-center justify-center rounded-[28px] border border-yellow-400/20 bg-black/20">

                <Boxes className="h-10 w-10 text-yellow-300" />

              </div>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}