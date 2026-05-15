"use client";

export default function DashboardSkeleton() {
  return (
    <div className="animate-pulse">

      {/* Hero */}
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

        <div>

          <div className="h-4 w-40 rounded-full bg-white/10" />

          <div className="mt-5 h-16 w-[420px] rounded-full bg-white/10" />

        </div>

        <div className="h-14 w-[220px] rounded-2xl bg-white/10" />

      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="rounded-[32px] border border-white/5 bg-white/[0.03] p-8"
          >

            <div className="h-14 w-14 rounded-2xl bg-white/10" />

            <div className="mt-8 h-4 w-32 rounded-full bg-white/10" />

            <div className="mt-5 h-12 w-40 rounded-full bg-white/10" />

            <div className="mt-6 h-2 rounded-full bg-white/10" />

          </div>
        ))}

      </div>

      {/* Main Grid */}
      <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">

        <div className="h-[420px] rounded-[40px] border border-white/5 bg-white/[0.03]" />

        <div className="space-y-6">

          <div className="h-[260px] rounded-[32px] border border-white/5 bg-white/[0.03]" />

          <div className="h-[320px] rounded-[32px] border border-white/5 bg-white/[0.03]" />

        </div>

      </div>

    </div>
  );
}