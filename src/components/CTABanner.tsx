import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/nature/valley.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-deep/90 via-deep/70 to-transparent" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-gold">
            Work With Us
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium text-warmwhite md:text-5xl">
            Let&apos;s Build Something Through Trade.
          </h2>
          <p className="mt-5 leading-relaxed text-warmwhite/75">
            Whether you are a coffee buyer, supplier, producer or business
            looking for reliable trade connections, we would love to hear from
            you.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/lets-talk"
              className="group flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-charcoal transition-colors hover:bg-warmwhite"
            >
              Start the Conversation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/coffee"
              className="rounded-full border border-warmwhite/40 px-8 py-4 text-sm font-bold text-warmwhite transition-colors hover:border-gold hover:text-gold"
            >
              View Our Coffee
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
