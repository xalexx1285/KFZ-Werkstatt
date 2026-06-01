import React, { useEffect, useState } from "react";
import { getOpenStatus, cn } from "../lib/utils";

export default function OpenStatus({ className, variant = "pill" }) {
  const [status, setStatus] = useState(() => getOpenStatus());

  useEffect(() => {
    const id = setInterval(() => setStatus(getOpenStatus()), 60000);
    return () => clearInterval(id);
  }, []);

  const dot = (
    <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
      {status.open && (
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
      )}
      <span className={cn("relative inline-flex h-2.5 w-2.5 rounded-full", status.open ? "bg-emerald-400" : "bg-zinc-500")} />
    </span>
  );

  return (
    <div
      data-testid="open-status"
      data-open={status.open ? "true" : "false"}
      className={cn(
        "inline-flex items-center gap-2.5",
        variant === "pill" &&
          "rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 backdrop-blur-md",
        className
      )}
    >
      {dot}
      <span className="text-xs font-bold uppercase tracking-[0.16em]">
        <span className={status.open ? "text-emerald-300" : "text-zinc-300"}>{status.label}</span>
        {status.detail && <span className="hidden text-zinc-500 sm:inline"> · {status.detail}</span>}
      </span>
    </div>
  );
}
