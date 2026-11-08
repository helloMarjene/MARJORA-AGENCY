import Reveal from "@/components/Reveal";
import { marketsConfig } from "@/data/market-data";
import { ArrowUpRight } from "lucide-react";

export default function MarketDestinations() {
  return (
    <section className="bg-deep py-24 text-warmwhite md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-gold">
              Target Markets
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium md:text-5xl">
              {marketsConfig.title}
            </h2>
            <p className="mt-6 leading-relaxed text-warmwhite/70">
              {marketsConfig.intro}
            </p>
            <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-gold/30 bg-gold/10 px-5 py-4">
              <span className="h-2.5 w-2.5 rounded-full bg-gold" />
              <div>
                <p className="text-sm font-bold tracking-wide">
                  {marketsConfig.base.country}
                </p>
                <p className="text-xs text-warmwhite/60">
                  {marketsConfig.base.role}
                </p>
              </div>
            </div>
            <p className="mt-8 text-xs leading-relaxed text-warmwhite/40">
              {marketsConfig.footer}
            </p>
          </Reveal>

          <div>
            {marketsConfig.markets.map((market, i) => (
              <Reveal key={market.country} delay={i * 0.07}>
                <div className="group flex items-center justify-between gap-4 border-b border-warmwhite/10 py-6 transition-colors hover:border-gold/40">
                  <div className="flex items-baseline gap-5">
                    <span className="font-display text-sm italic text-gold/70">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-medium text-warmwhite transition-colors group-hover:text-gold">
                        {market.country}
                      </h3>
                      <p className="mt-1 text-sm text-warmwhite/50">
                        {market.note}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-warmwhite/30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
