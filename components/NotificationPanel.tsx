"use client";

import {
  Bell,
  ShieldCheck,
  Activity,
  Cpu,
  Globe,
} from "lucide-react";

type Props = {
  open: boolean;
};

const notifications = [
  {
    icon: Activity,
    title: "Infrastructure synchronized",
    time: "2 min ago",
  },
  {
    icon: ShieldCheck,
    title: "Security verification completed",
    time: "8 min ago",
  },
  {
    icon: Cpu,
    title: "AI compute scaling activated",
    time: "12 min ago",
  },
  {
    icon: Globe,
    title: "Global deployment successful",
    time: "24 min ago",
  },
];

export default function NotificationPanel({ open }: Props) {
  if (!open) return null;

  return (
    <div className="absolute right-0 top-20 z-50 w-[420px] rounded-[32px] border border-white/10 bg-[#0A0E1D]/95 p-6 shadow-2xl backdrop-blur-2xl">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500/10">

            <Bell className="h-5 w-5 text-yellow-300" />

          </div>

          <div>

            <h3 className="text-xl font-bold">
              Notifications
            </h3>

            <p className="text-sm text-zinc-500">
              Live enterprise activity
            </p>

          </div>

        </div>

        <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-xs text-yellow-200">

          4 New

        </div>

      </div>

      {/* Notifications */}
      <div className="mt-8 space-y-4">

        {notifications.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 rounded-2xl border border-white/5 bg-black/20 p-5 transition hover:bg-white/[0.03]"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/10">

              <item.icon className="h-5 w-5 text-yellow-300" />

            </div>

            <div className="flex-1">

              <p className="font-medium text-white">
                {item.title}
              </p>

              <p className="mt-2 text-sm text-zinc-500">
                {item.time}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}