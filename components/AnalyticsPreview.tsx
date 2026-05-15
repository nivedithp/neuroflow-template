"use client";

export default function AnalyticsPreview() {
  return (
    <section className="relative z-10 px-6 pb-28 md:px-10">

      <div className="rounded-[48px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl">

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
            Monitor AI deployment systems and infrastructure telemetry
            in real-time.
          </p>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">

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
            <div
              key={index}
              className="rounded-[32px] border border-white/10 bg-black/20 p-8"
            >

              <h3 className="text-5xl font-bold text-yellow-300">
                {item.value}
              </h3>

              <p className="mt-4 text-zinc-500">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}