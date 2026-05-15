"use client";

import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";

import BackgroundEffects from "../../components/BackgroundEffects";
import CommandPalette from "../../components/CommandPalette";
import AppSidebar from "../../components/AppSidebar";
import AppTopbar from "../../components/AppTopbar";

import {
  Users,
  Shield,
  Activity,
  UserPlus,
  Mail,
  Crown,
  Sparkles,
} from "lucide-react";

const members = [
  {
    name: "Nivv Raj",
    role: "Founder & AI Architect",
    status: "Active",
    badge: "Owner",
  },
  {
    name: "Sophia Chen",
    role: "Infrastructure Engineer",
    status: "Online",
    badge: "Admin",
  },
  {
    name: "Ethan Brooks",
    role: "Security Analyst",
    status: "Monitoring",
    badge: "Core",
  },
  {
    name: "Ava Williams",
    role: "Deployment Manager",
    status: "Deploying",
    badge: "Ops",
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">

      <BackgroundEffects />

      <CommandPalette />

      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">

        {/* Sidebar */}
        <AppSidebar active="Team" />

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

                Enterprise Workforce

              </p>

              <h1 className="hero-title mt-4 text-5xl font-bold md:text-7xl">

  <Balancer>
    Team Management
  </Balancer>

</h1>
            </div>

            <button className="flex items-center gap-3 rounded-2xl bg-yellow-400 px-8 py-4 font-medium text-black transition hover:scale-[1.02] hover:bg-yellow-300">

              <UserPlus className="h-5 w-5" />

              Invite Member

            </button>

          </motion.div>

          {/* Top Cards */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                icon: Users,
                label: "Active Members",
                value: "248",
              },
              {
                icon: Shield,
                label: "Security Teams",
                value: "18",
              },
              {
                icon: Activity,
                label: "Operations",
                value: "99.9%",
              },
              {
                icon: Sparkles,
                label: "AI Operators",
                value: "84",
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

          {/* Team Grid */}
          <div className="mt-8 grid gap-6 xl:grid-cols-2">

            {members.map((member, index) => (
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

                {/* Header */}
                <div className="flex items-start justify-between">

                  <div className="flex items-center gap-5">

                    {/* Avatar */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-2xl font-bold text-yellow-300">

                      {member.name.charAt(0)}

                    </div>

                    <div>

                      <h3 className="text-2xl font-bold">
                        {member.name}
                      </h3>

                      <p className="mt-1 text-zinc-500">
                        {member.role}
                      </p>

                    </div>

                  </div>

                  <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-xs text-yellow-200">

                    {member.badge}

                  </div>

                </div>

                {/* Status */}
                <div className="mt-8 flex items-center justify-between rounded-2xl border border-white/5 bg-black/20 px-5 py-4">

                  <div className="flex items-center gap-3">

                    <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_15px_#4ade80]" />

                    <span className="text-zinc-300">
                      {member.status}
                    </span>

                  </div>

                  <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm transition hover:border-yellow-500/20 hover:bg-white/[0.06]">

                    <Mail className="h-4 w-4" />

                    Contact

                  </button>

                </div>

              </motion.div>
            ))}

          </div>

          {/* Leadership Panel */}
          <div className="mt-8 rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <p className="text-sm uppercase tracking-[0.3em] text-yellow-300">

                  Leadership Access

                </p>

                <h2 className="mt-4 text-4xl font-bold">

                  Enterprise Administration

                </h2>

                <p className="mt-4 max-w-2xl text-zinc-500">

                  Manage workforce permissions, AI infrastructure access,
                  deployment control, and organization-wide operational systems.

                </p>

              </div>

              <button className="flex items-center gap-3 rounded-2xl bg-yellow-400 px-8 py-4 font-medium text-black transition hover:scale-[1.02] hover:bg-yellow-300">

                <Crown className="h-5 w-5" />

                Open Admin Console

              </button>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}