"use client";

import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";

import BackgroundEffects from "../../components/BackgroundEffects";
import CommandPalette from "../../components/CommandPalette";
import AppSidebar from "../../components/AppSidebar";
import AppTopbar from "../../components/AppTopbar";

import {
  Rocket,
  Cpu,
  Globe,
  Shield,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
} from "lucide-react";

const deployments = [
  {
    name: "Neural Core API",
    region: "US-East",
    status: "Live",
    uptime: "99.99%",
  },
  {
    name: "AI Telemetry Engine",
    region: "Europe",
    status: "Scaling",
    uptime: "99.94%",
  },
  {
    name: "Quantum Processing Grid",
    region: "Asia",
    status: "Deploying",
    uptime: "99.82%",
  },
];

export default function DeployPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">

      <BackgroundEffects />

      <CommandPalette />

      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">

        {/* Sidebar */}
        <AppSidebar active="Deploy" />

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

                Infrastructure Operations

              </p>

             <h1 className="hero-title mt-4 text-5xl font-bold md:text-7xl">

  <Balancer>
    Deployments
  </Balancer>

</h1>
            </div>

            <button className="flex items-center gap-3 rounded-2xl bg-yellow-400 px-8 py-4 font-medium text-black transition hover:scale-[1.02] hover:bg-yellow-300">

              <Rocket className="h-5 w-5" />

              New Deployment

            </button>

          </motion.div>

          {/* Top Cards */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                icon: Cpu,
                label: "AI Clusters",
                value: "128",
              },
              {
                icon: Globe,
                label: "Global Regions",
                value: "18",
              },
              {
                icon: Shield,
                label: "Protected Systems",
                value: "99.99%",
              },
              {
                icon: Rocket,
                label: "Deploy Speed",
                value: "1.2s",
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

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/10">

                  <item.icon className="h-7 w-7 text-yellow-300" />

                </div>

                <p className="mt-8 text-zinc-500">
                  {item.label}
                </p>

                <h3 className="mt-3 text-5xl font-bold">
                  {item.value}
                </h3>

              </motion.div>
            ))}

          </div>

          {/* Deployment Table */}
          <div className="mt-8 rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl">

            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-8 py-6">

              <div>

                <p className="text-sm text-zinc-500">
                  Active Infrastructure
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  Global Deployment Grid
                </h3>

              </div>

              <button className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm transition hover:border-yellow-500/20 hover:bg-white/[0.06]">

                <ArrowUpRight className="h-4 w-4" />

                View Logs

              </button>

            </div>

            {/* Rows */}
            <div className="p-4">

              {deployments.map((item, index) => (
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
                  className="mb-4 flex flex-col gap-6 rounded-[28px] border border-white/5 bg-black/20 p-6 lg:flex-row lg:items-center lg:justify-between"
                >

                  {/* Left */}
                  <div>

                    <h3 className="text-2xl font-bold">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-zinc-500">
                      Region: {item.region}
                    </p>

                  </div>

                  {/* Center */}
                  <div className="flex items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-400">

                    <CheckCircle2 className="h-4 w-4" />

                    {item.status}

                  </div>

                  {/* Right */}
                  <div className="flex items-center gap-3 text-yellow-300">

                    <Clock3 className="h-5 w-5" />

                    {item.uptime}

                  </div>

                </motion.div>
              ))}

            </div>

          </div>

          {/* Bottom Grid */}
          <div className="mt-8 grid gap-6 xl:grid-cols-2">

            {/* Deployment Activity */}
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">

              <p className="text-sm text-zinc-500">
                Live Activity
              </p>

              <h3 className="mt-2 text-3xl font-bold">
                Deployment Events
              </h3>

              <div className="mt-8 space-y-4">

                {[
                  "AI infrastructure synchronized",
                  "Telemetry systems deployed",
                  "Security verification completed",
                  "Global scaling initialized",
                  "Neural compute optimized",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/5 bg-black/20 px-5 py-4 text-sm text-zinc-300"
                  >

                    {item}

                  </div>
                ))}

              </div>

            </div>

            {/* Deployment Monitor */}
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">

              <p className="text-sm text-zinc-500">
                Infrastructure Load
              </p>

              <h3 className="mt-2 text-3xl font-bold">
                System Capacity
              </h3>

              <div className="mt-10 space-y-8">

                {[
                  {
                    label: "AI Compute",
                    value: "92%",
                  },
                  {
                    label: "Global Routing",
                    value: "86%",
                  },
                  {
                    label: "Security Layer",
                    value: "98%",
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

        </section>

      </div>

    </main>
  );
}