"use client";

import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 px-6 py-20">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#F5D76E08,transparent_60%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 lg:grid-cols-4">

        {/* Brand */}
        <div>

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">

              <Sparkles className="h-6 w-6 text-yellow-300" />

            </div>

            <div>

              <h3 className="text-2xl font-bold">
                NeuroFlow
              </h3>

              <p className="text-sm text-zinc-500">
                AI Command Center
              </p>

            </div>

          </div>

          <p className="mt-6 max-w-sm leading-relaxed text-zinc-500">

            Autonomous enterprise orchestration platform designed for intelligent global operations and neural infrastructure management.

          </p>

        </div>

        {/* Navigation */}
        <div>

          <h4 className="mb-6 text-lg font-semibold">
            Platform
          </h4>

          <div className="space-y-4 text-zinc-500">

            <p className="transition hover:text-white">
              Neural Operations
            </p>

            <p className="transition hover:text-white">
              Telemetry Systems
            </p>

            <p className="transition hover:text-white">
              AI Infrastructure
            </p>

            <p className="transition hover:text-white">
              Enterprise Security
            </p>

          </div>

        </div>

        {/* Company */}
        <div>

          <h4 className="mb-6 text-lg font-semibold">
            Company
          </h4>

          <div className="space-y-4 text-zinc-500">

            <p className="transition hover:text-white">
              About
            </p>

            <p className="transition hover:text-white">
              Careers
            </p>

            <p className="transition hover:text-white">
              Contact
            </p>

            <p className="transition hover:text-white">
              Privacy
            </p>

          </div>

        </div>

        {/* Status */}
        <div>

          <h4 className="mb-6 text-lg font-semibold">
            Infrastructure
          </h4>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl">

            <div className="flex items-center gap-3">

              <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_20px_#4ade80]" />

              <p className="text-sm text-zinc-400">
                All systems operational
              </p>

            </div>

            <div className="mt-8 space-y-4">

              <div>

                <p className="text-sm text-zinc-500">
                  Global Sync
                </p>

                <h3 className="mt-1 text-2xl font-bold">
                  99.99%
                </h3>

              </div>

              <div>

                <p className="text-sm text-zinc-500">
                  Active Regions
                </p>

                <h3 className="mt-1 text-2xl font-bold">
                  18
                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="relative z-10 mx-auto mt-20 flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row">

        <p>
          © 2026 NeuroFlow. All rights reserved.
        </p>

        <div className="flex items-center gap-6">

          <p className="transition hover:text-white">
            Terms
          </p>

          <p className="transition hover:text-white">
            Privacy
          </p>

          <p className="transition hover:text-white">
            Security
          </p>

        </div>

      </div>

    </footer>
  );
}