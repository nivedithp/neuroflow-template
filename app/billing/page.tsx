"use client";

import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";

import BackgroundEffects from "../../components/BackgroundEffects";
import CommandPalette from "../../components/CommandPalette";
import AppSidebar from "../../components/AppSidebar";
import AppTopbar from "../../components/AppTopbar";

import {
  CreditCard,
  Sparkles,
  Check,
  ArrowUpRight,
  Shield,
  Receipt,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    features: [
      "AI Infrastructure Access",
      "Basic Analytics",
      "Global Deployment",
      "Community Support",
    ],
  },
  {
    name: "Enterprise",
    price: "$299",
    featured: true,
    features: [
      "Unlimited AI Systems",
      "Advanced Analytics",
      "Priority Infrastructure",
      "Dedicated Security Layer",
      "Enterprise Support",
    ],
  },
  {
    name: "Scale",
    price: "$999",
    features: [
      "Global AI Grid",
      "Autonomous Scaling",
      "Quantum Infrastructure",
      "Dedicated Cluster",
      "Custom Deployment",
    ],
  },
];

export default function BillingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">

      <BackgroundEffects />

      <CommandPalette />

      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">

        {/* Sidebar */}
        <AppSidebar active="Billing" />

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

                Enterprise Subscription

              </p>

            <h1 className="hero-title mt-4 text-5xl font-bold md:text-7xl">

  <Balancer>
    Billing Center
  </Balancer>

</h1>

            </div>

            <button className="flex items-center gap-3 rounded-2xl bg-yellow-400 px-8 py-4 font-medium text-black transition hover:scale-[1.02] hover:bg-yellow-300">

              <ArrowUpRight className="h-5 w-5" />

              Upgrade Plan

            </button>

          </motion.div>

          {/* Current Plan */}
          <div className="rounded-[40px] border border-yellow-500/20 bg-yellow-500/10 p-8 backdrop-blur-2xl">

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <p className="text-sm text-yellow-200">
                  Current Subscription
                </p>

                <h2 className="mt-3 text-5xl font-bold">
                  Enterprise Plan
                </h2>

                <p className="mt-4 max-w-2xl text-yellow-100/70">

                  Advanced AI infrastructure access with enterprise-grade
                  deployment systems and autonomous scaling.

                </p>

              </div>

              <div className="rounded-[32px] border border-yellow-400/20 bg-black/20 px-10 py-8">

                <p className="text-sm text-yellow-200">
                  Monthly Usage
                </p>

                <h3 className="mt-3 text-5xl font-bold">
                  $12.8K
                </h3>

              </div>

            </div>

          </div>

          {/* Plans */}
          <div className="mt-8 grid gap-6 xl:grid-cols-3">

            {plans.map((plan, index) => (
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
                className={`rounded-[40px] border p-8 backdrop-blur-2xl ${
                  plan.featured
                    ? "border-yellow-500/20 bg-yellow-500/10"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/10">

                    <Sparkles className="h-7 w-7 text-yellow-300" />

                  </div>

                  {plan.featured && (
                    <div className="rounded-xl border border-yellow-400/20 bg-black/20 px-3 py-1 text-xs text-yellow-200">

                      Popular

                    </div>
                  )}

                </div>

                <h3 className="mt-8 text-3xl font-bold">
                  {plan.name}
                </h3>

                <div className="mt-4 flex items-end gap-2">

                  <span className="text-6xl font-bold">
                    {plan.price}
                  </span>

                  <span className="pb-2 text-zinc-500">
                    /month
                  </span>

                </div>

                <div className="mt-8 space-y-4">

                  {plan.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3"
                    >

                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500/10">

                        <Check className="h-4 w-4 text-yellow-300" />

                      </div>

                      <span className="text-zinc-300">
                        {feature}
                      </span>

                    </div>
                  ))}

                </div>

                <button
                  className={`mt-10 w-full rounded-2xl px-6 py-4 font-medium transition ${
                    plan.featured
                      ? "bg-yellow-400 text-black hover:bg-yellow-300"
                      : "border border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                  }`}
                >

                  Choose Plan

                </button>

              </motion.div>
            ))}

          </div>

          {/* Bottom Grid */}
          <div className="mt-8 grid gap-6 xl:grid-cols-2">

            {/* Payment Methods */}
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/10">

                  <CreditCard className="h-7 w-7 text-yellow-300" />

                </div>

                <div>

                  <p className="text-sm text-zinc-500">
                    Payment Method
                  </p>

                  <h3 className="mt-1 text-3xl font-bold">
                    Enterprise Card
                  </h3>

                </div>

              </div>

              <div className="mt-8 rounded-[28px] border border-white/10 bg-black/20 p-6">

                <p className="text-zinc-500">
                  Card Number
                </p>

                <h4 className="mt-3 text-3xl font-bold tracking-[0.3em]">

                  •••• •••• •••• 2048

                </h4>

                <div className="mt-8 flex items-center justify-between">

                  <div>

                    <p className="text-sm text-zinc-500">
                      Card Holder
                    </p>

                    <p className="mt-1 font-medium">
                      Neural Systems Inc.
                    </p>

                  </div>

                  <div>

                    <p className="text-sm text-zinc-500">
                      Expires
                    </p>

                    <p className="mt-1 font-medium">
                      12/29
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Billing Security */}
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/10">

                  <Shield className="h-7 w-7 text-yellow-300" />

                </div>

                <div>

                  <p className="text-sm text-zinc-500">
                    Payment Security
                  </p>

                  <h3 className="mt-1 text-3xl font-bold">
                    Enterprise Protected
                  </h3>

                </div>

              </div>

              <div className="mt-8 space-y-4">

                {[
                  "256-bit encrypted payment systems",
                  "Autonomous fraud protection",
                  "Global compliance verification",
                  "AI transaction monitoring",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-2xl border border-white/5 bg-black/20 px-5 py-4"
                  >

                    <Receipt className="h-5 w-5 text-yellow-300" />

                    <span className="text-zinc-300">
                      {item}
                    </span>

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