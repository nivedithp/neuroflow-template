"use client";

const logs = [
  "[SYSTEM] Neural synchronization initialized",
  "[AI] Telemetry streams connected",
  "[SECURITY] Encryption layers verified",
  "[DEPLOY] Autonomous scaling enabled",
  "[NETWORK] Global node routing stable",
  "[AI] Predictive infrastructure online",
  "[SYSTEM] Quantum cache optimized",
  "[STATUS] All operational systems active",
];

export default function AITerminal() {
  return (
    <div className="overflow-hidden rounded-[32px] border border-white/10 bg-black">

      {/* Top */}
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">

        <div className="flex items-center gap-3">

          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-emerald-400" />

        </div>

        <p className="text-sm text-zinc-500">
          neural-terminal.ts
        </p>

      </div>

      {/* Logs */}
      <div className="space-y-4 p-6 font-mono text-sm text-emerald-400">

        {logs.map((log, index) => (
          <div
            key={index}
            className="flex items-start gap-3"
          >

            <span className="text-yellow-300">
              $
            </span>

            <p>
              {log}
            </p>

          </div>
        ))}

        {/* Blinking Cursor */}
        <div className="flex items-center gap-2">

          <span className="text-yellow-300">
            $
          </span>

          <div className="h-5 w-3 animate-pulse bg-emerald-400" />

        </div>

      </div>

    </div>
  );
}