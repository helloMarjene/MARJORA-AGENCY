import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";
import { site } from "@/data/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "MARJORA AGENCY is an African coffee sourcing and trading agency connecting coffee suppliers, producers and buyers through reliable trade relationships.",
};

const values = [
  { title: "Integrity", text: "We do business the honest way — no shortcuts, no surprises." },
  { title: "Reliability", text: "Commitments made are commitments kept, shipment after shipment." },
  { title: "Transparency", text: "Clear communication from farm gate to final delivery." },
  { title: "Partnership", text: "We grow when the farmers and buyers we serve grow." },
  { title: "Quality", text: "Careful sourcing and grading in every lot we handle." },
  { title: "Growth", text: "Building African trade capacity for the long term." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Marjora"
        title="Born from Africa's Coffee Lands"
        subtitle="An African coffee sourcing and trading agency focused on connecting coffee suppliers, producers and buyers through reliable trade relationships."
        image="/images/about/hero.jpg"
      />

      <section className="bg-warmwhite py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-coffee">
                Who We Are
              </p>
              <h2 className="mt-4 font-display text-3xl font-medium text-charcoal md:text-4xl">
                Bridging Coffee Communities and Commercial Markets
              </h2>
              <p className="mt-6 leading-relaxed text-charcoal/65">
                Based in {site.country}, MARJORA AGENCY exists to bridge the
                gap between coffee-growing communities and commercial markets,
                creating opportunities for businesses across Africa. We are not
                a café and we do not sell cups of coffee — we are a trade
                agency that sources coffee, connects suppliers with buyers and
                facilitates commercial relationships across borders.
              </p>
              <p className="mt-4 leading-relaxed text-charcoal/65">
                Behind every coffee bean is a farmer, a landscape, a supply
                chain and an opportunity to connect businesses. Our work is to
                make those connections reliable, transparent and profitable for
                everyone involved.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="overflow-hidden rounded-[2rem]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about/farmers.jpg"
                  alt="Coffee farmers at work"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="mt-24 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[2rem] bg-deep p-10 text-warmwhite">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
                  Our Mission
                </p>
                <p className="mt-5 font-display text-2xl font-medium leading-snug">
                  To connect Africa&apos;s coffee-growing communities with
                  reliable buyers and markets through transparent sourcing,
                  trusted partnerships and efficient trade solutions.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-[2rem] border border-charcoal/10 bg-cream p-10">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-coffee">
                  Our Vision
                </p>
                <p className="mt-5 font-display text-2xl font-medium leading-snug text-charcoal">
                  To become a trusted African trade agency connecting
                  agricultural producers and global markets, creating
                  sustainable commercial opportunities across the continent.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-coffee">
              Core Values
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium text-charcoal">
              What We Stand For
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="border-t-2 border-gold/50 pt-5">
                  <h3 className="font-display text-2xl font-medium text-charcoal">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
