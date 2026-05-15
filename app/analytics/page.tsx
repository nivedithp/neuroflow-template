"use client";

import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";

import BackgroundEffects from "../../components/BackgroundEffects";
import CommandPalette from "../../components/CommandPalette";
import AppSidebar from "../../components/AppSidebar";
import AppTopbar from "../../components/AppTopbar";

import {
  BarChart3,
  TrendingUp,
  Activity,
  Globe,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

const cards = [
  {
    icon: BarChart3,
    title: "AI Requests",
    value: "48.2M",
    growth: "+18%",
  },
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    value: "$2.8M",
    growth: "+32%",
  },
  {
    icon: Activity,
    title: "System Activity",
    value: "99.98%",
    growth: "+4%",
  },
  {
    icon: Globe,
    title: "Global Reach",
    value: "182",
    growth: "+12%",
  },
];

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">

      <BackgroundEffects />

      <CommandPalette />

      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">

        {/* Sidebar */}
        <AppSidebar active="Analytics" />

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

                Enterprise Intelligence

              </p>

             <h1 className="hero-title mt-4 text-5xl font-bold md:text-7xl">

  <Balancer>
    Analytics Center
  </Balancer>

</h1>
            </div>

            <button className="flex items-center gap-3 rounded-2xl bg-yellow-400 px-8 py-4 font-medium text-black transition hover:scale-[1.02] hover:bg-yellow-300">

              <ArrowUpRight className="h-5 w-5" />

              Generate Report

            </button>

          </motion.div>

          {/* KPI Cards */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {cards.map((card, index) => (
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

                <div className="flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/10">

                    <card.icon className="h-7 w-7 text-yellow-300" />

                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-400">

                    {card.growth}

                  </div>

                </div>

                <p className="mt-8 text-zinc-500">
                  {card.title}
                </p>

                <h3 className="mt-3 text-5xl font-bold">
                  {card.value}
                </h3>

              </motion.div>
            ))}

          </div>

          {/* Main Analytics */}
          <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">

            {/* Performance Graph */}
            <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">

              <div className="mb-8">

                <p className="text-sm text-zinc-500">
                  AI Performance
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  Neural Throughput Analysis
                </h3>

              </div>

              {/* Fake Graph */}
              <div className="flex h-[320px] items-end gap-4">

                {[40, 65, 52, 80, 68, 95, 74, 100].map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      height: 0,
                    }}
                    animate={{
                      height: `${height}%`,
                    }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.5,
                    }}
                    className="flex-1 rounded-t-3xl bg-gradient-to-t from-yellow-500 to-yellow-300"
                  />
                ))}

              </div>

            </div>

            {/* AI Insights */}
            <div className="space-y-6">

              {/* Insight Card */}
              <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/10">

                    <Cpu className="h-7 w-7 text-yellow-300" />

                  </div>

                  <div>

                    <p className="text-sm text-zinc-500">
                      AI Prediction
                    </p>

                    <h3 className="mt-1 text-2xl font-bold">
                      Growth Forecast
                    </h3>

                  </div>

                </div>

                <p className="mt-8 leading-relaxed text-zinc-400">

                  Predictive infrastructure analysis estimates a
                  38% operational growth increase across global
                  AI deployment systems over the next quarter.

                </p>

              </div>

              {/* System Health */}
              <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">

                <p className="text-sm text-zinc-500">
                  System Health
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  Infrastructure Stability
                </h3>

                <div className="mt-8 space-y-6">

                  {[
                    {
                      label: "AI Compute",
                      value: "98%",
                    },
                    {
                      label: "Global Network",
                      value: "94%",
                    },
                    {
                      label: "Security Grid",
                      value: "99%",
                    },
                  ].map((item, index) => (
                    <div key={index}>

                      <div className="mb-2 flex items-center justify-between text-sm">

                        <span className="text-zinc-400">
                          {item.label}
                        </span>

                        <span className="text-yellow-300">
                          {item.value}
                        </span>

                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-white/10">

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

          </div>

        </section>

      </div>

    </main>
  );
}