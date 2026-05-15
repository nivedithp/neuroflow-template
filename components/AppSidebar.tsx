"use client";

import { useState } from "react";

import Link from "next/link";

import {
  Sparkles,
  Activity,
  TrendingUp,
  Terminal,
  CreditCard,
  Settings,
  Users,
  Boxes,
  Menu,
  X,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

const navItems = [
  {
    icon: Activity,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: TrendingUp,
    label: "Analytics",
    href: "/analytics",
  },
  {
    icon: Terminal,
    label: "Deploy",
    href: "/deploy",
  },
  {
    icon: CreditCard,
    label: "Billing",
    href: "/billing",
  },
  {
    icon: Users,
    label: "Team",
    href: "/team",
  },
  {
    icon: Boxes,
    label: "Integrations",
    href: "/integrations",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/settings",
  },
];

type Props = {
  active: string;
};

export default function AppSidebar({ active }: Props) {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setOpen(true)}
        className="fixed left-5 top-5 z-50 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#0A0E1D] text-white lg:hidden"
      >

        <Menu className="h-5 w-5" />

      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen border-r border-white/10 bg-[#050816]/95 p-6 backdrop-blur-2xl transition-all duration-300 lg:static ${
          collapsed
            ? "w-[110px]"
            : "w-[280px]"
        } ${
          open
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >

        {/* Top Controls */}
        <div className="mb-10 flex items-center justify-between">

          {!collapsed && (
            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">

                <Sparkles className="h-7 w-7 text-yellow-300" />

              </div>

              <div>

                <h2 className="text-2xl font-bold">
                  NeuroFlow
                </h2>

                <p className="text-sm text-zinc-500">
                  AI Command Center
                </p>

              </div>

            </div>
          )}

          {collapsed && (
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">

              <Sparkles className="h-7 w-7 text-yellow-300" />

            </div>
          )}

          {/* Desktop Collapse */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition hover:border-yellow-500/20 hover:bg-white/[0.06] lg:flex"
          >

            {collapsed ? (
              <PanelLeftOpen className="h-5 w-5 text-zinc-400" />
            ) : (
              <PanelLeftClose className="h-5 w-5 text-zinc-400" />
            )}

          </button>

          {/* Mobile Close */}
          <button
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] lg:hidden"
          >

            <X className="h-5 w-5 text-white" />

          </button>

        </div>

        {/* Navigation */}
        <div className="space-y-3">

          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`flex items-center rounded-2xl transition ${
                collapsed
                  ? "justify-center px-0 py-4"
                  : "gap-4 px-5 py-4"
              } ${
                active === item.label
                  ? "border border-yellow-500/20 bg-yellow-500/10 text-yellow-200"
                  : "text-zinc-400 hover:bg-white/[0.03]"
              }`}
            >

              <item.icon className="h-5 w-5 shrink-0" />

              {!collapsed && (
                <span className="font-medium">
                  {item.label}
                </span>
              )}

            </Link>
          ))}

        </div>

        {/* Bottom Status */}
        {!collapsed && (
          <div className="mt-12 rounded-[32px] border border-white/10 bg-white/[0.03] p-6">

            <p className="text-sm text-zinc-500">
              Neural Sync
            </p>

            <h3 className="mt-3 text-4xl font-bold">
              99.99%
            </h3>

            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">

              <div className="h-full w-[92%] rounded-full bg-yellow-400" />

            </div>

          </div>
        )}

      </aside>
    </>
  );
}