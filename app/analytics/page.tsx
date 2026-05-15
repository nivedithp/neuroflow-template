"use client";

import { motion } from "framer-motion";

export default function AnalyticsPreview() {
  return (
    <section className="relative z-10 px-6 pb-28 md:px-10">

      <div className="rounded-[48px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl md:p-12">

        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          <div>

            <p className="text-sm uppercase tracking-[0.35em] text-yellow-300">

              AI Analytics

            </p>

            <h2 className="mt-5 text-5xl font-bold leading-tight md:text-6xl">

              Infrastructure
              <br />
              Intelligence Layer

            </h2>

          </div>

          <p className="max-w-xl text-lg leading-relaxed text-zinc-500">

            Monitor AI deployment systems, autonomous infrastructure,
            predictive analytics, and global operational telemetry
            in real-time.

          </p>

        </div>

        {/* Analytics Grid */}
        <div className="mt-14 grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">

          {/* Revenue Chart */}
          <motion.div
            whileHover={{
              y: -6,
            }}
            className="rounded-[36px] border border-white/10 bg-[#0A0E1D]/80 p-8"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-zinc-500">
                  Revenue Growth
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  AI Infrastructure Scaling
                </h3>

              </div>

              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-400">

                +248%

              </div>

            </div>

            {/* Fake Chart */}
            <div className="relative mt-12 h-[280px] overflow-hidden rounded-[28px] border border-white/10 bg-black/30">

              {/* Glow */}
              <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-yellow-500/5 to-transparent" />

              {/* Grid */}
              <div className="absolute inset-0 opacity-10">

                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-0 h-px w-full bg-white"
                    style={{
                      top: `${i * 40}px`,
                    }}
                  />
                ))}

              </div>

              {/* Animated Line */}
              <svg
                viewBox="0 0 800 300"
                className="absolute inset-0 h-full w-full"
              >

                <motion.path
                  d="M0 240 C100 200 180 180 260 190 C340 200 420 120 500 100 C580 80 660 60 800 20"
                  fill="none"
                  stroke="#FACC15"
                  strokeWidth="6"
                  strokeLinecap="round"
                  initial={{
                    pathLength: 0,
                  }}
                  whileInView={{
                    pathLength: 1,
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                  }}
                />

              </svg>

            </div>

          </motion.div>

          {/* Right Stats */}
          <div className="space-y-6">

            {[
              {
                value: "84K/s",
                label: "Neural Throughput",
              },
              {
                value: "182",
                label: "Global Regions",
              },
              {
                value: "99.99%",
                label: "Infrastructure Uptime",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -6,
                }}
                className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
              >

                <h3 className="text-5xl font-bold text-yellow-300">

                  {item.value}

                </h3>

                <p className="mt-4 text-zinc-500">

                  {item.label}

                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}