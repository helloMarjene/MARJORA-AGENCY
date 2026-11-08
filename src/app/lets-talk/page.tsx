import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site-config";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Let's Talk",
  description:
    "Start a trade conversation with MARJORA AGENCY — coffee buyers, suppliers, producers and business partners welcome.",
};

export default function LetsTalkPage() {
  return (
    <>
      <header className="relative flex min-h-[52vh] items-end overflow-hidden bg-charcoal pb-14 pt-40">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/contact/contact-bg.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-gold">
              Let&apos;s Talk
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium text-warmwhite md:text-6xl">
              Let&apos;s Build Something Through Trade.
            </h1>
            <p className="mt-5 max-w-2xl leading-relaxed text-warmwhite/80">
              Whether you are a coffee buyer, supplier, producer or business
              looking for reliable trade connections, we would love to hear
              from you.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="relative overflow-hidden bg-warmwhite py-20 md:py-28">
        <div className="pointer-events-none absolute -right-32 top-10 hidden w-[480px] opacity-90 lg:block">
          <div className="animate-float">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={site.bean}
              alt=""
              className="w-full mix-blend-multiply opacity-80"
            />
          </div>
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.15} className="lg:pt-6">
            <div className="rounded-[2rem] bg-deep p-10 text-warmwhite">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
                Prefer to Call?
              </p>
              <div className="mt-6 space-y-5">
                {site.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-lg font-semibold tracking-wide transition-colors hover:text-gold"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-warmwhite/10">
                      <Phone className="h-4 w-4 text-gold" />
                    </span>
                    {p}
                  </a>
                ))}
              </div>
              <div className="mt-8 border-t border-warmwhite/10 pt-8">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
                  Based In
                </p>
                <p className="mt-3 font-display text-2xl font-medium">
                  {site.country}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-warmwhite/60">
                  Serving coffee trade enquiries from across Africa and
                  international markets.
                </p>
              </div>
              <div className="mt-8 border-t border-warmwhite/10 pt-8">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
                  What Happens Next
                </p>
                <ol className="mt-4 space-y-3 text-sm leading-relaxed text-warmwhite/70">
                  <li>1. You send the enquiry form via WhatsApp.</li>
                  <li>2. Our team reviews your requirements.</li>
                  <li>
                    3. We respond to discuss sourcing, grading and logistics.
                  </li>
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
