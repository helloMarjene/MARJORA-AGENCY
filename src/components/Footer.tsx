import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";
import { site } from "@/data/site-config";
import { coffeeCategories } from "@/data/coffee-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-deep text-warmwhite">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="block h-20 w-20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={site.logo}
                  alt="MARJORA AGENCY logo"
                  className="h-full w-full object-fill"
                />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-base font-semibold tracking-[0.18em]">
                  MARJORA
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
                  Agency
                </span>
              </span>
            </Link>
            <p className="mt-5 font-display text-lg italic text-gold">
              {site.tagline}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-warmwhite/60">
              An African coffee sourcing and trading agency connecting
              producers, suppliers and buyers through reliable trade
              relationships.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Coffee", href: "/coffee" },
                { label: "Contact", href: "/contact" },
                { label: "Let's Talk", href: "/lets-talk" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-warmwhite/70 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Our Coffee
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {coffeeCategories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/lets-talk?interest=${encodeURIComponent(c.name)}`}
                    className="text-warmwhite/70 transition-colors hover:text-gold"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {site.phones.map((p) => (
                <li key={p}>
                  <a
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-warmwhite/70 transition-colors hover:text-gold"
                  >
                    <Phone className="h-3.5 w-3.5 text-gold" />
                    {p}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2 text-warmwhite/70">
                <MapPin className="h-3.5 w-3.5 text-gold" />
                {site.country}
              </li>
            </ul>
            <div className="mt-6">
              <SocialLinks dark />
              <p className="mt-3 text-[11px] text-warmwhite/40">
                Social profiles launch soon — @marjoraagencyafrica
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-warmwhite/10 pt-8 text-xs text-warmwhite/40 sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="font-display italic text-warmwhite/50">
            {site.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
