"use client";

export default function BackgroundEffects() {
  return (
    <>

      {/* Top Glow */}
      <div className="pointer-events-none fixed left-[-120px] top-[-120px] z-0 h-[420px] w-[420px] rounded-full bg-yellow-400/10 blur-3xl" />

      {/* Bottom Glow */}
      <div className="pointer-events-none fixed bottom-[-160px] right-[-160px] z-0 h-[520px] w-[520px] rounded-full bg-yellow-300/10 blur-3xl" />

      {/* Center Glow */}
      <div className="pointer-events-none fixed left-1/2 top-1/3 z-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-yellow-200/5 blur-3xl" />

      {/* Grid Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

    </>
  );
}