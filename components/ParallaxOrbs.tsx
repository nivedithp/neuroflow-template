"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxOrbs() {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 2000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -250]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

      {/* Orb 1 */}
      <motion.div
        style={{ y: y1 }}
        className="absolute left-[10%] top-[10%] h-[400px] w-[400px] rounded-full bg-yellow-500/6 blur-[120px]"
      />

      {/* Orb 2 */}
      <motion.div
        style={{ y: y2 }}
        className="absolute right-[10%] top-[40%] h-[350px] w-[350px] rounded-full bg-yellow-300/5 blur-[120px]"
      />

      {/* Orb 3 */}
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-[10%] left-[35%] h-[300px] w-[300px] rounded-full bg-yellow-400/5 blur-[100px]"
      />

    </div>
  );
}