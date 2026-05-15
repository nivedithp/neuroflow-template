"use client";

import { motion } from "framer-motion";

const companies = [
  "NEURALSYNC",
  "QUANTIX",
  "AETHER AI",
  "SYNAPSE",
  "VORTEX LABS",
  "NEXORA",
];

export default function TrustedBy() {
  return (
    <section className="relative px-6 py-20 md:py-28">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl"
      >

        {/* Label */}
        <p className="mb-12 text-center text-sm uppercase tracking-[0.35em] text-zinc-500">

          Trusted by next-generation AI enterprises

        </p>

        {/* Logos */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">

          {companies.map((company) => (
            <div
              key={company}
              className="flex h-24 items-center justify-center rounded-[28px] border border-white/10 bg-white/[0.03] text-sm font-semibold tracking-[0.25em] text-zinc-400 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-yellow-500/20 hover:text-yellow-200"
            >

              {company}

            </div>
          ))}

        </div>

      </motion.div>

    </section>
  );
}