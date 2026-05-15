"use client";

import { useState } from "react";

import NotificationPanel from "./NotificationPanel";
import ProfileDropdown from "./ProfileDropdown";

import {
  Search,
  Bell,
  Sparkles,
  ChevronDown,
} from "lucide-react";

export default function AppTopbar() {
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="relative mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

      {/* Search */}
      <div className="relative w-full max-w-2xl">

        <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />

        <input
          type="text"
          placeholder="Search AI infrastructure, deployments, analytics..."
          className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.03] pl-14 pr-5 text-white outline-none backdrop-blur-xl transition focus:border-yellow-500/20"
        />

      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* AI Status */}
        <div className="hidden items-center gap-3 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 px-5 py-3 md:flex">

          <div className="h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_15px_#fde047]" />

          <span className="text-sm text-yellow-200">

            Neural Systems Active

          </span>

        </div>

        {/* Notifications */}
        <div className="relative">

          <button
            onClick={() => {
              setNotifOpen(!notifOpen);
              setProfileOpen(false);
            }}
            className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-yellow-500/20 hover:bg-white/[0.06]"
          >

            <Bell className="h-5 w-5 text-white" />

            <div className="absolute right-4 top-4 h-2.5 w-2.5 rounded-full bg-yellow-300 shadow-[0_0_10px_#fde047]" />

          </button>

          <NotificationPanel open={notifOpen} />

        </div>

        {/* Profile */}
        <div className="relative">

          <button
            onClick={() => {
              setProfileOpen(!profileOpen);
              setNotifOpen(false);
            }}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 transition hover:border-yellow-500/20 hover:bg-white/[0.06]"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/10">

              <Sparkles className="h-5 w-5 text-yellow-300" />

            </div>

            <div className="hidden text-left md:block">

              <p className="font-medium">

                Nivv Raj

              </p>

              <p className="text-sm text-zinc-500">

                Enterprise Admin

              </p>

            </div>

            <ChevronDown className="h-4 w-4 text-zinc-500" />

          </button>

          <ProfileDropdown open={profileOpen} />

        </div>

      </div>

    </div>
  );
}