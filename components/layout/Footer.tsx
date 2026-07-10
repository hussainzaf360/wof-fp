import Link from "next/link";
import { MapPin, Clock, Mail, Phone, Heart } from "lucide-react";
import { nav, site } from "@/lib/site";
import { Emblem } from "@/components/ui/Emblem";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-brass/10 bg-ink pb-10 pt-20 text-cream">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="space-y-6 lg:col-span-5">
            <Link href="/" className="flex items-center gap-3">
              <Emblem className="h-11 w-11" />
              <span className="font-display text-2xl text-cream">
                World of Flavors
              </span>
            </Link>
            <p className="max-w-sm leading-relaxed text-cream/55">
              Salem&apos;s community-focused food cart park. A warm, affordable,
              and welcoming space where every meal feels like family.
            </p>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="World of Flavors on Facebook"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-brass/20 bg-cream/5 text-cream transition-all duration-300 hover:border-brass hover:bg-brass hover:text-ink"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>

          {/* Visit */}
          <div className="space-y-6 lg:col-span-4">
            <h4 className="eyebrow text-brass">Visit Us</h4>
            <ul className="space-y-5 text-cream/70">
              <li className="flex items-start gap-4">
                <span className="mt-0.5 rounded-lg bg-cream/5 p-2">
                  <MapPin className="h-5 w-5 text-brass" strokeWidth={1.75} />
                </span>
                <span>
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 rounded-lg bg-cream/5 p-2">
                  <Clock className="h-5 w-5 text-brass" strokeWidth={1.75} />
                </span>
                <span>{site.hours}</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 rounded-lg bg-cream/5 p-2">
                  <Mail className="h-5 w-5 text-brass" strokeWidth={1.75} />
                </span>
                <a href={site.emailHref} className="hover:text-cream break-all">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 rounded-lg bg-cream/5 p-2">
                  <Phone className="h-5 w-5 text-brass" strokeWidth={1.75} />
                </span>
                <a href={site.phoneHref} className="hover:text-cream">
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-6 lg:col-span-3">
            <h4 className="eyebrow text-brass">Quick Links</h4>
            <ul className="space-y-4">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cream/60 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-sm text-cream/40 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} World of Flavors Food Park. All
            rights reserved.
          </p>
          <p className="flex items-center gap-2">
            Proudly feeding Salem with{" "}
            <Heart className="h-4 w-4 fill-brass text-brass" />
          </p>
        </div>
      </div>
    </footer>
  );
}
