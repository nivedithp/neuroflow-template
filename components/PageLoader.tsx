"use client";

import { motion } from "framer-motion";

import {
  Sparkles,
} from "lucide-react";

export default function PageLoader() {
  return (
    <motion.div
      initial={{
        opacity: 1,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-[#050816]"
    >

      {/* Glow */}
      <div className="absolute h-[300px] w-[300px] rounded-full bg-yellow-400/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Icon */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 6, -6, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="flex h-24 w-24 items-center justify-center rounded-[32px] border border-yellow-500/20 bg-yellow-500/10"
        >

          <Sparkles className="h-10 w-10 text-yellow-300" />

        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          className="mt-8 text-5xl font-bold"
        >

          NeuroFlow

        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
          }}
          className="mt-3 text-zinc-500"
        >

          Initializing AI infrastructure...

        </motion.p>

        {/* Loader */}
        <div className="mt-8 flex gap-3">

          {[0, 1, 2].map((item) => (
            <motion.div
              key={item}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                delay: item * 0.15,
              }}
              className="h-4 w-4 rounded-full bg-yellow-300"
            />
          ))}

        </div>

      </div>

    </motion.div>
  );
}
