import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CoffeeCategories from "@/components/CoffeeCategories";
import CoffeeSlider from "@/components/CoffeeSlider";
import MarketDestinations from "@/components/MarketDestinations";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Coffee",
  description:
    "Explore the coffee categories MARJORA AGENCY sources and trades — Robusta Screen 18, Robusta Screen 15, Robusta FAQ, Kiboko and Arabica.",
};

export default function CoffeePage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Coffee"
        title="Sourced with Care, Traded with Trust"
        subtitle="From Uganda's coffee farms to buyers across Africa and beyond — these are the coffee forms we source, grade and trade."
        image="/images/coffee/arabica.jpg"
      />

      <section className="bg-warmwhite py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <CoffeeCategories />
        </div>
      </section>

      <CoffeeSlider />

      <section className="bg-warmwhite py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-coffee">
                Uganda Coffee Industry
              </p>
              <h2 className="mt-4 font-display text-3xl font-medium text-charcoal md:text-4xl">
                The Home of Robusta
              </h2>
              <p className="mt-6 leading-relaxed text-charcoal/65">
                Uganda is one of Africa&apos;s leading coffee exporters and the
                natural home of Robusta — the species still grows wild around
                the forests of Lake Victoria. Coffee supports millions of
                Ugandan livelihoods, and the country&apos;s unique position
                straddling the equator allows two harvest seasons a year.
              </p>
              <p className="mt-4 leading-relaxed text-charcoal/65">
                The industry is supported by public institutions such as the{" "}
                <a
                  href="https://ugandacoffee.go.ug"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-forest underline decoration-gold decoration-2 underline-offset-4 hover:text-coffee"
                >
                  Uganda Coffee Development Authority (UCDA)
                </a>
                , which regulates, promotes and develops the country&apos;s
                coffee sub-sector.
              </p>
              <p className="mt-6 text-xs leading-relaxed text-charcoal/45">
                MARJORA AGENCY is an independent trading agency. References to
                industry organisations are informational and do not imply
                partnership or affiliation.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/journey/harvesting.jpg"
                  alt="Harvesting coffee cherries"
                  loading="lazy"
                  className="aspect-[3/4] w-full rounded-3xl object-cover"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/journey/export.jpg"
                  alt="Coffee prepared for export"
                  loading="lazy"
                  className="mt-10 aspect-[3/4] w-full rounded-3xl object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <MarketDestinations />
      <CTABanner />
    </>
  );
}
