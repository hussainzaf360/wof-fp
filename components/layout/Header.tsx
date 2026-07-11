"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/85 backdrop-blur-xl border-b border-brass/15"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/wof-logo.jpeg"
            alt="World of Flavors"
            width={48}
            height={48}
            priority
            className="h-11 w-11 rounded-xl object-cover shadow-lg ring-1 ring-brass/30 transition-all duration-500 group-hover:scale-105 group-hover:ring-brass/60"
          />
          <span className="font-display text-[1.6rem] font-medium leading-none tracking-tight text-cream transition-colors group-hover:text-brass">
            World of Flavors
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "text-brass"
                  : "text-cream/75 hover:text-cream"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-brass px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:bg-brass-200"
          >
            <Phone className="h-4 w-4" strokeWidth={2} />
            Contact Us
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="p-2 text-cream md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden border-t border-brass/10 bg-ink/98 backdrop-blur-xl transition-[max-height,opacity] duration-500 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-x flex flex-col gap-1 py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`rounded-xl px-3 py-3 text-lg font-medium transition-colors ${
                isActive(item.href)
                  ? "text-brass"
                  : "text-cream/85 hover:bg-cream/5"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.phoneHref}
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brass px-5 py-3.5 text-base font-semibold text-ink"
          >
            <Phone className="h-4 w-4" strokeWidth={2} />
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}
