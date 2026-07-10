"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { isOpenNow } from "@/lib/hours";
import { site } from "@/lib/site";

/** Live "Open Now / Closed" indicator — recomputes every minute. */
export function OpenStatusBadge() {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const update = () => setOpen(isOpenNow());
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  const closed = open === false;
  const label = open === null ? "Open Daily" : open ? "Open Now" : "Closed";
  const labelColor = closed ? "text-red-300" : "text-emerald-300";
  const dot = closed ? "bg-red-400" : "bg-emerald-400";
  const sub = closed ? `Opens daily at ${site.openHourLabel}` : site.hours;

  return (
    <div className="flex flex-col items-center gap-2.5">
      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-cream/5">
        <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
          {!closed && (
            <span
              className={`ping-slow absolute inline-flex h-full w-full rounded-full ${dot} opacity-75`}
            />
          )}
          <span
            className={`relative inline-flex h-3.5 w-3.5 rounded-full ${dot} ring-2 ring-ink`}
          />
        </span>
        <Clock className="h-6 w-6 text-brass" strokeWidth={1.75} />
      </div>
      <span
        className={`text-sm font-semibold uppercase tracking-wide ${labelColor}`}
      >
        {label}
      </span>
      <span className="text-center text-sm text-cream/55">{sub}</span>
    </div>
  );
}
