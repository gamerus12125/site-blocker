"use client";
import clsx from "clsx";
import { UiLogo } from "@/shared/ui/ui-logo";
import { SignOutButton } from "@/features/auth";
import { useSessionQuery } from "@/entities/session";

export function Header({ className }: { className?: string }) {
  const { data } = useSessionQuery();
  return (
    <header
      className={clsx(
        "px-4 py-5 border-b border-b-slate-300 flex justify-between items-center bg-white",
        className,
      )}
    >
      <UiLogo />
      {data && (
        <div className="flex items-center justify-center gap-2">
          <span>{data?.email}</span>
          <SignOutButton />
        </div>
      )}
    </header>
  );
}
