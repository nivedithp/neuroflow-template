"use client";

import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";

import BackgroundEffects from "../../components/BackgroundEffects";
import CommandPalette from "../../components/CommandPalette";
import AppSidebar from "../../components/AppSidebar";
import AppTopbar from "../../components/AppTopbar";

import {
  Settings,
  Shield,
  Bell,
  Globe,
  Cpu,
  Lock,
  Database,
  Sparkles,
} from "lucide-react";

const settingsCards = [
  {
    icon: Shield,
    title: "Security Layer",
    desc: "Enterprise authentication and infrastructure protection.",
  },
  {
    icon: Bell,
    title: "Notifications",
    desc: "Real-time operational alerts and AI monitoring systems.",
  },
  {
    icon: Globe,
    title: "Global Infrastructure",
    desc: "Regional deployment routing and AI scaling preferences.",
  },
  {
    icon: Cpu,
    title: "AI Optimization",
    desc: "Neural compute performance and predictive analysis tuning.",
  },
];

export default function SettingsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">

      <BackgroundEffects />

      <CommandPalette />

      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">

        {/* Sidebar */}
        <AppSidebar active="Settings" />

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

                Enterprise Configuration

              </p>

              <h1 className="hero-title mt-4 text-5xl font-bold md:text-7xl">

  <Balancer>
    Workspace Settings
  </Balancer>

</h1>

            </div>

            <button className="flex items-center gap-3 rounded-2xl bg-yellow-400 px-8 py-4 font-medium text-black transition hover:scale-[1.02] hover:bg-yellow-300">

              <Settings className="h-5 w-5" />

              Save Configuration

            </button>

          </motion.div>

          {/* Settings Cards */}
          <div className="grid gap-6 md:grid-cols-2">

            {settingsCards.map((item, index) => (
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

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10">

                  <item.icon className="h-8 w-8 text-yellow-300" />

                </div>

                <h3 className="mt-8 text-3xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-zinc-500">
                  {item.desc}
                </p>

                {/* Toggle */}
                <div className="mt-8 flex items-center justify-between rounded-2xl border border-white/5 bg-black/20 px-5 py-4">

                  <span className="text-zinc-300">
                    Enabled
                  </span>

                  <div className="flex h-8 w-14 items-center rounded-full bg-yellow-400 px-1">

                    <div className="ml-auto h-6 w-6 rounded-full bg-black" />

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

          {/* Bottom Grid */}
          <div className="mt-8 grid gap-6 xl:grid-cols-2">

            {/* Security */}
            <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/10">

                  <Lock className="h-7 w-7 text-yellow-300" />

                </div>

                <div>

                  <p className="text-sm text-zinc-500">
                    Security Systems
                  </p>

                  <h3 className="mt-1 text-3xl font-bold">
                    Infrastructure Protection
                  </h3>

                </div>

              </div>

              <div className="mt-8 space-y-5">

                {[
                  "Multi-layer AI authentication",
                  "Quantum encrypted infrastructure",
                  "Predictive threat monitoring",
                  "Enterprise access control",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/5 bg-black/20 px-5 py-4 text-zinc-300"
                  >

                    {item}

                  </div>
                ))}

              </div>

            </div>

            {/* Database */}
            <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/10">

                  <Database className="h-7 w-7 text-yellow-300" />

                </div>

                <div>

                  <p className="text-sm text-zinc-500">
                    Data Infrastructure
                  </p>

                  <h3 className="mt-1 text-3xl font-bold">
                    Autonomous Systems
                  </h3>

                </div>

              </div>

              <div className="mt-10 space-y-8">

                {[
                  {
                    label: "AI Processing",
                    value: "94%",
                  },
                  {
                    label: "Neural Storage",
                    value: "88%",
                  },
                  {
                    label: "Infrastructure Sync",
                    value: "99%",
                  },
                ].map((item, index) => (
                  <div key={index}>

                    <div className="mb-3 flex items-center justify-between">

                      <span className="text-zinc-400">
                        {item.label}
                      </span>

                      <span className="text-yellow-300">
                        {item.value}
                      </span>

                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-white/10">

                      <div
                        style={{
                          width: item.value,
                        }}
                        className="h-full rounded-full bg-yellow-400"
                      />

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* Footer Card */}
          <div className="mt-8 rounded-[40px] border border-yellow-500/20 bg-yellow-500/10 p-8 backdrop-blur-2xl">

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <p className="text-sm uppercase tracking-[0.3em] text-yellow-200">

                  AI Infrastructure

                </p>

                <h2 className="mt-4 text-4xl font-bold">

                  Enterprise Configuration Active

                </h2>

                <p className="mt-4 max-w-2xl text-yellow-100/70">

                  Your global AI infrastructure is synchronized across all
                  deployment regions with enterprise-grade protection systems.

                </p>

              </div>

              <div className="flex h-24 w-24 items-center justify-center rounded-[28px] border border-yellow-400/20 bg-black/20">

                <Sparkles className="h-10 w-10 text-yellow-300" />

              </div>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}