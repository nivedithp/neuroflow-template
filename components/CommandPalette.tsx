"use client";

import { useEffect, useState } from "react";

import {
  Search,
  LayoutDashboard,
  BarChart3,
  Settings,
  CreditCard,
  Boxes,
} from "lucide-react";

const commands = [
  {
    icon: LayoutDashboard,
    label: "Open Dashboard",
  },
  {
    icon: BarChart3,
    label: "View Analytics",
  },
  {
    icon: CreditCard,
    label: "Manage Billing",
  },
  {
    icon: Boxes,
    label: "Open Integrations",
  },
  {
    icon: Settings,
    label: "Workspace Settings",
  },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();

        setOpen((prev) => !prev);
      }

      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-start justify-center bg-black/50 px-4 pt-24 backdrop-blur-sm">

      <div className="w-full max-w-2xl overflow-hidden rounded-[32px] border border-white/10 bg-[#0A0E1D] shadow-2xl">

        {/* Search */}
        <div className="flex items-center gap-4 border-b border-white/10 px-6 py-5">

          <Search className="h-5 w-5 text-zinc-500" />

          <input
            autoFocus
            placeholder="Search commands, deployments, analytics..."
            className="w-full bg-transparent text-white outline-none placeholder:text-zinc-500"
          />

        </div>

        {/* Commands */}
        <div className="p-3">

          {commands.map((item, index) => (
            <button
              key={index}
              className="flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left transition hover:bg-white/[0.04]"
            >

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-500/10">

                <item.icon className="h-5 w-5 text-yellow-300" />

              </div>

              <div>

                <p className="font-medium text-white">
                  {item.label}
                </p>

                <p className="text-sm text-zinc-500">
                  Execute workspace command
                </p>

              </div>

            </button>
          ))}

        </div>

      </div>

    </div>
  );
}