import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { Vendor, ComingSoonVendor } from "@/types";

export function VendorCard({ vendor }: { vendor: Vendor }) {
  return (
    <Link
      href={`/vendors/${vendor.slug}`}
      className="group block overflow-hidden rounded-3xl border border-ink-soft/10 bg-paper transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_34px_70px_-34px_rgba(10,23,16,0.55)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={vendor.images.card}
          alt={vendor.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-ink/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-brass backdrop-blur">
          <Icon name={vendor.icon} className="h-3.5 w-3.5" />
          {vendor.category}
        </span>
      </div>
      <div className="p-7">
        <h3 className="font-display text-2xl text-ink-soft">{vendor.name}</h3>
        <p className="mt-2 leading-relaxed text-ink-soft/70">{vendor.cardBlurb}</p>
        <span className="mt-5 inline-flex items-center gap-2 font-semibold text-sea">
          View Menu
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            strokeWidth={2}
          />
        </span>
      </div>
    </Link>
  );
}

export function ComingSoonCard({ vendor }: { vendor: ComingSoonVendor }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-3xl border-2 border-dashed border-ink-soft/15 bg-paper/50">
      <div className="flex aspect-[16/10] items-center justify-center bg-ink-soft/[0.04]">
        <Icon name={vendor.icon} className="h-16 w-16 text-ink-soft/20" />
      </div>
      <div className="p-7">
        <span className="inline-flex items-center rounded-full bg-brass/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brass-400">
          {vendor.label}
        </span>
        <h3 className="mt-3 font-display text-2xl text-ink-soft/55">
          Your Cart Here
        </h3>
        <p className="mt-2 leading-relaxed text-ink-soft/50">{vendor.teaser}</p>
      </div>
    </div>
  );
}
