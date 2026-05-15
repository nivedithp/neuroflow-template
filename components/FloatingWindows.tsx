"use client";

import { motion } from "framer-motion";

export default function FloatingWindows() {
  return (
    <div className="pointer-events-none fixed inset-0 z-20 hidden xl:block overflow-hidden">

      {/* Window 1 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute left-[5%] top-[20%] w-[260px] rounded-[28px] border border-white/10 bg-black/40 p-5 backdrop-blur-2xl"
      >

        <div className="mb-5 flex items-center justify-between">

          <div>
            <p className="text-xs text-zinc-500">
              Neural Sync
            </p>

            <h4 className="mt-1 text-lg font-semibold text-white">
              Active Nodes
            </h4>
          </div>

          <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_20px_#4ade80]" />

        </div>

        <div className="space-y-3">

          <div className="h-2 rounded-full bg-yellow-400/80" />
          <div className="h-2 w-[80%] rounded-full bg-yellow-300/40" />
          <div className="h-2 w-[60%] rounded-full bg-yellow-200/20" />

        </div>

      </motion.div>

      {/* Window 2 */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute right-[6%] top-[32%] w-[280px] rounded-[28px] border border-white/10 bg-black/40 p-6 backdrop-blur-2xl"
      >

        <p className="text-xs text-zinc-500">
          Autonomous Telemetry
        </p>

        <h4 className="mt-2 text-2xl font-bold text-white">
          84K/s Throughput
        </h4>

        <div className="mt-6 flex gap-2">

          <div className="h-20 w-full rounded-full bg-yellow-400/70" />
          <div className="h-14 w-full rounded-full bg-yellow-300/30" />
          <div className="h-24 w-full rounded-full bg-yellow-200/20" />
          <div className="h-10 w-full rounded-full bg-yellow-400/60" />

        </div>

      </motion.div>

      {/* Window 3 */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="absolute bottom-[12%] left-[12%] w-[240px] rounded-[28px] border border-white/10 bg-black/40 p-5 backdrop-blur-2xl"
      >

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500/10">

            <div className="h-4 w-4 rounded-full bg-yellow-300 shadow-[0_0_20px_#F5D76E]" />

          </div>

          <div>

            <p className="text-xs text-zinc-500">
              Global Status
            </p>

            <h4 className="mt-1 text-lg font-semibold text-white">
              Systems Operational
            </h4>

          </div>

        </div>

      </motion.div>

    </div>
  );
}