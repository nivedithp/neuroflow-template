"use client";

import { useEffect, useState } from "react";

import Balancer from "react-wrap-balancer";

import { motion, AnimatePresence } from "framer-motion";

import {
  Activity,
  Shield,
  Globe,
  Cpu,
} from "lucide-react";

import BackgroundEffects from "../../components/BackgroundEffects";
import PageLoader from "../../components/PageLoader";
import DashboardSkeleton from "../../components/DashboardSkeleton";
import CommandPalette from "../../components/CommandPalette";
import AppSidebar from "../../components/AppSidebar";
import AppTopbar from "../../components/AppTopbar";
import RevenueChart from "../../components/RevenueChart";
import DeploymentTable from "../../components/DeploymentTable";
import AITerminal from "../../components/AITerminal";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: (i = 1) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: i * 0.08,
      duration: 0.6,
    },
  }),
};

const stats = [
  {
    icon: Activity,
    label: "Active Nodes",
    value: "2.4M+",
  },
  {
    icon: Cpu,
    label: "AI Throughput",
    value: "84K/s",
  },
  {
    icon: Globe,
    label: "Global Regions",
    value: "18",
  },
  {
    icon: Shield,
    label: "Security Sync",
    value: "99.99%",
  },
];

const activities = [
  "Neural synchronization complete",
  "Distributed AI systems optimized",
  "Infrastructure scaling stable",
  "Autonomous telemetry active",
  "Security verification successful",
];

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <PageLoader />}
      </AnimatePresence>

      <main className="min-h-screen overflow-hidden bg-[#050816] text-white">

        {/* Background */}
        <BackgroundEffects />

        {/* Command Palette */}
        <CommandPalette />

        {/* Layout */}
        <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">

          {/* Sidebar */}
          <AppSidebar active="Dashboard" />

          {/* Main */}
          <section className="relative z-10 p-6 md:p-10">

            {loading ? (
              <DashboardSkeleton />
            ) : (
              <>

                {/* Topbar */}
                <AppTopbar />

                {/* Hero */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
                >

                  <div>

                    <p className="text-sm uppercase tracking-[0.35em] text-yellow-300">
                      Operational Overview
                    </p>

                    <h1 className="hero-title mt-4 text-5xl font-bold md:text-7xl">

                      <Balancer>
                        Enterprise Dashboard
                      </Balancer>

                    </h1>

                  </div>

                  <button className="rounded-2xl bg-yellow-400 px-8 py-4 font-medium text-black transition-all duration-300 hover:scale-[1.02] hover:bg-yellow-300 active:scale-[0.98]">

                    Deploy AI Systems

                  </button>

                </motion.div>

                {/* Stats */}
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                  {stats.map((item, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={fadeUp}
                      whileHover={{
                        y: -6,
                        scale: 1.01,
                      }}
                      className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
                    >

                      <div className="flex items-center justify-between">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/10">

                          <item.icon className="h-7 w-7 text-yellow-300" />

                        </div>

                        <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-400">

                          Live

                        </div>

                      </div>

                      <p className="mt-8 text-zinc-500">
                        {item.label}
                      </p>

                      <h3 className="mt-3 text-5xl font-bold">
                        {item.value}
                      </h3>

                      <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">

                        <div className="h-full w-[84%] rounded-full bg-yellow-400" />

                      </div>

                    </motion.div>
                  ))}

                </div>

                {/* Main Grid */}
                <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">

                  {/* Revenue */}
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    custom={2}
                    className="rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
                  >

                    <div className="mb-8 flex items-center justify-between">

                      <div>

                        <p className="text-sm text-zinc-500">
                          Revenue Analytics
                        </p>

                        <h3 className="mt-2 text-3xl font-bold">
                          AI Infrastructure Growth
                        </h3>

                      </div>

                      <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-200">

                        +248%

                      </div>

                    </div>

                    <div className="rounded-[28px] border border-white/10 bg-[#0A0E1D]/80 p-6">

                      <RevenueChart />

                    </div>

                  </motion.div>

                  {/* Right Panel */}
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    custom={3}
                    className="space-y-6"
                  >

                    {/* Activity Feed */}
                    <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">

                      <div className="mb-8 flex items-center justify-between">

                        <div>

                          <p className="text-sm text-zinc-500">
                            Activity Feed
                          </p>

                          <h3 className="mt-2 text-3xl font-bold">
                            Live Operations
                          </h3>

                        </div>

                        <div className="flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-400">

                          <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_#4ade80]" />

                          Active

                        </div>

                      </div>

                      <div className="space-y-4">

                        {activities.map((item, index) => (
                          <div
                            key={index}
                            className="rounded-2xl border border-white/5 bg-black/20 px-5 py-4 text-sm text-zinc-300"
                          >

                            {item}

                          </div>
                        ))}

                      </div>

                    </div>

                  </motion.div>

                </div>

              </>
            )}

          </section>

        </div>

      </main>
    </>
  );
}