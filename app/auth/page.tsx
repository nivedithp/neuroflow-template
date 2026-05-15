"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import {
  Sparkles,
  Mail,
  Lock,
  User,
  ArrowRight,
} from "lucide-react";

export default function AuthPage() {
  const [login, setLogin] = useState(true);

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
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="relative z-10 w-full max-w-xl rounded-[40px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl"
      >

        {/* Logo */}
        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10">

            <Sparkles className="h-8 w-8 text-yellow-300" />

          </div>

          <div>

            <h1 className="text-3xl font-bold">
              NeuroFlow
            </h1>

            <p className="mt-1 text-zinc-500">
              Enterprise AI Infrastructure
            </p>

          </div>

        </div>

        {/* Heading */}
        <div className="mt-10">

          <p className="text-sm uppercase tracking-[0.35em] text-yellow-300">

            Secure Access

          </p>

          <h2 className="mt-4 text-5xl font-bold">

            {login ? "Welcome Back" : "Create Account"}

          </h2>

        </div>

        {/* Form */}
        <div className="mt-10 space-y-6">

          {!login && (
            <div>

              <label className="mb-3 block text-sm text-zinc-400">

                Full Name

              </label>

              <div className="relative">

                <User className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="h-14 w-full rounded-2xl border border-white/10 bg-black/20 pl-14 pr-5 outline-none transition focus:border-yellow-500/20"
                />

              </div>

            </div>
          )}

          {/* Email */}
          <div>

            <label className="mb-3 block text-sm text-zinc-400">

              Email Address

            </label>

            <div className="relative">

              <Mail className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />

              <input
                type="email"
                placeholder="Enter your email"
                className="h-14 w-full rounded-2xl border border-white/10 bg-black/20 pl-14 pr-5 outline-none transition focus:border-yellow-500/20"
              />

            </div>

          </div>

          {/* Password */}
          <div>

            <label className="mb-3 block text-sm text-zinc-400">

              Password

            </label>

            <div className="relative">

              <Lock className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />

              <input
                type="password"
                placeholder="Enter your password"
                className="h-14 w-full rounded-2xl border border-white/10 bg-black/20 pl-14 pr-5 outline-none transition focus:border-yellow-500/20"
              />

            </div>

          </div>

          {/* Button */}
          <button className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-yellow-400 font-medium text-black transition hover:scale-[1.01] hover:bg-yellow-300">

            {login ? "Login to Workspace" : "Create Workspace"}

            <ArrowRight className="h-5 w-5" />

          </button>

        </div>

        {/* Bottom */}
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-zinc-500">

          <span>

            {login
              ? "Don't have an account?"
              : "Already have an account?"}

          </span>

          <button
            onClick={() => setLogin(!login)}
            className="font-medium text-yellow-300"
          >

            {login ? "Create one" : "Login"}

          </button>

        </div>

      </motion.div>

    </main>
  );
}