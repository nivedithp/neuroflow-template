"use client";

const deployments = [
  {
    name: "Neural Core API",
    region: "US-East",
    status: "Healthy",
    uptime: "99.99%",
  },
  {
    name: "Telemetry Engine",
    region: "Europe",
    status: "Active",
    uptime: "99.92%",
  },
  {
    name: "AI Compute Grid",
    region: "Asia",
    status: "Scaling",
    uptime: "99.87%",
  },
  {
    name: "Security Gateway",
    region: "Global",
    status: "Protected",
    uptime: "100%",
  },
];

export default function DeploymentTable() {
  return (
    <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03]">

      {/* Header */}
      <div className="grid grid-cols-4 border-b border-white/10 px-6 py-5 text-sm text-zinc-500">

        <div>System</div>
        <div>Region</div>
        <div>Status</div>
        <div>Uptime</div>

      </div>

      {/* Rows */}
      <div>

        {deployments.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-4 items-center border-b border-white/5 px-6 py-5 transition hover:bg-white/[0.03]"
          >

            <div className="font-medium">
              {item.name}
            </div>

            <div className="text-zinc-400">
              {item.region}
            </div>

            <div>

              <div className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-400">

                <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_#4ade80]" />

                {item.status}

              </div>

            </div>

            <div className="font-medium text-yellow-300">

              {item.uptime}

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}