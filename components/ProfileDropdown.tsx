"use client";

import Link from "next/link";

import {
  User,
  Settings,
  CreditCard,
  LogOut,
  Shield,
} from "lucide-react";

type Props = {
  open: boolean;
};

export default function ProfileDropdown({ open }: Props) {
  if (!open) return null;

  return (
    <div className="absolute right-0 top-20 z-50 w-[320px] rounded-[32px] border border-white/10 bg-[#0A0E1D]/95 p-6 shadow-2xl backdrop-blur-2xl">

      {/* User */}
      <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-black/20 p-5">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/10 text-xl font-bold text-yellow-300">

          N

        </div>

        <div>

          <h3 className="text-lg font-bold">
            Nivv Raj
          </h3>

          <p className="text-sm text-zinc-500">
            Enterprise Admin
          </p>

        </div>

      </div>

      {/* Menu */}
      <div className="mt-6 space-y-3">

        <Link
          href="/team"
          className="flex items-center gap-4 rounded-2xl border border-transparent bg-black/20 px-5 py-4 transition hover:border-yellow-500/20 hover:bg-white/[0.03]"
        >

          <User className="h-5 w-5 text-yellow-300" />

          <span className="text-zinc-300">
            Profile Management
          </span>

        </Link>

        <Link
          href="/settings"
          className="flex items-center gap-4 rounded-2xl border border-transparent bg-black/20 px-5 py-4 transition hover:border-yellow-500/20 hover:bg-white/[0.03]"
        >

          <Settings className="h-5 w-5 text-yellow-300" />

          <span className="text-zinc-300">
            Workspace Settings
          </span>

        </Link>

        <Link
          href="/billing"
          className="flex items-center gap-4 rounded-2xl border border-transparent bg-black/20 px-5 py-4 transition hover:border-yellow-500/20 hover:bg-white/[0.03]"
        >

          <CreditCard className="h-5 w-5 text-yellow-300" />

          <span className="text-zinc-300">
            Billing & Plans
          </span>

        </Link>

        <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-black/20 px-5 py-4">

          <Shield className="h-5 w-5 text-yellow-300" />

          <span className="text-zinc-300">
            Enterprise Protected
          </span>

        </div>

      </div>

      {/* Logout */}
      <button className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-red-300 transition hover:bg-red-500/20">

        <LogOut className="h-5 w-5" />

        Logout

      </button>

    </div>
  );
}