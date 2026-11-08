import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SocialLinks from "@/components/SocialLinks";
import CTABanner from "@/components/CTABanner";
import { site } from "@/data/site-config";
import { Phone, MapPin, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact MARJORA AGENCY — African coffee sourcing and trading. Call, WhatsApp or start a conversation about coffee trade.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to Marjora"
        subtitle="Call us, message us on WhatsApp, or start a conversation — we respond to every serious enquiry."
        image="/images/nature/valley.jpg"
      />

      <section className="bg-warmwhite py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {site.phones.map((phone) => (
              <Reveal key={phone}>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="group block h-full rounded-[2rem] border border-charcoal/10 bg-cream/60 p-8 transition-colors hover:border-gold"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-warmwhite transition-colors group-hover:bg-coffee">
                    <Phone className="h-5 w-5" />
                  </span>
                  <h2 className="mt-5 font-display text-xl font-medium text-charcoal">
                    Call Us
                  </h2>
                  <p className="mt-2 font-semibold tracking-wide text-charcoal/75">
                    {phone}
                  </p>
                </a>
              </Reveal>
            ))}
            <Reveal delay={0.1}>
              <a
                href={`https://wa.me/${site.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full rounded-[2rem] border border-charcoal/10 bg-cream/60 p-8 transition-colors hover:border-gold"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-warmwhite transition-colors group-hover:bg-coffee">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <h2 className="mt-5 font-display text-xl font-medium text-charcoal">
                  WhatsApp
                </h2>
                <p className="mt-2 font-semibold tracking-wide text-charcoal/75">
                  {site.phones[0]}
                </p>
              </a>
            </Reveal>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[2rem] border border-charcoal/10 bg-cream/60 p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-warmwhite">
                  <MapPin className="h-5 w-5" />
                </span>
                <h2 className="mt-5 font-display text-xl font-medium text-charcoal">
                  Based In
                </h2>
                <p className="mt-2 font-semibold tracking-wide text-charcoal/75">
                  {site.country}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/55">
                  Trading across African markets and connecting with
                  international buyers. A physical office address will be
                  published here once confirmed.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex h-full flex-col rounded-[2rem] border border-charcoal/10 bg-cream/60 p-8">
                <h2 className="font-display text-xl font-medium text-charcoal">
                  Follow Along
                </h2>
                <p className="mt-2 text-sm text-charcoal/55">
                  Our social channels are on the way. Links activate
                  automatically once the profiles go live.
                </p>
                <div className="mt-auto pt-6">
                  <SocialLinks />
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-16 text-center">
            <p className="font-display text-2xl font-medium text-charcoal md:text-3xl">
              Ready to discuss a trade opportunity?
            </p>
            <a
              href="/lets-talk"
              className="mt-6 inline-block rounded-full bg-gold px-9 py-4 text-sm font-bold text-charcoal transition-colors hover:bg-coffee hover:text-warmwhite"
            >
              Let&apos;s Talk
            </a>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
