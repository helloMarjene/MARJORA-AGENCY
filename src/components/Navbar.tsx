"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks, site } from "@/data/site-config";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const links = [...navLinks, { label: "Let's Talk", href: "/lets-talk" }];

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
      >
        <nav
          className={`flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border border-white/40 bg-white/70 py-2 pl-3 pr-2 shadow-lg shadow-black/5 backdrop-blur-xl transition-all duration-300 ${
            scrolled ? "bg-white/85 shadow-black/10" : ""
          }`}
        >
          <Link href="/" className="flex items-center gap-3">
            <span className="block h-14 w-[180px] shrink-0 sm:w-[220px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={site.logo}
                alt="MARJORA AGENCY logo"
                className="h-full w-full origin-center object-contain"
              />
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  pathname === link.href
                    ? "bg-deep text-warmwhite"
                    : "text-charcoal/80 hover:bg-cream hover:text-charcoal"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/lets-talk"
              className={`group ml-2 flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                pathname === "/lets-talk"
                  ? "bg-coffee text-warmwhite"
                  : "bg-gold text-charcoal hover:bg-coffee hover:text-warmwhite"
              }`}
            >
              Let&apos;s Talk
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-deep text-warmwhite md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-deep/95 px-8 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-2">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -32, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className={`block rounded-2xl px-4 py-4 font-display text-3xl ${
                      pathname === link.href
                        ? "text-gold"
                        : "text-warmwhite"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <p className="mt-10 px-4 text-sm tracking-wide text-warmwhite/50">
              {site.tagline}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
