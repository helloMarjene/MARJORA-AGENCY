import Reveal from "@/components/Reveal";
import { journeySteps } from "@/data/journey-data";

export default function CoffeeJourney() {
  return (
    <section className="bg-warmwhite py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-coffee">
            Our Journey
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium text-charcoal md:text-5xl">
            From Farm to Market
          </h2>
          <p className="mt-5 leading-relaxed text-charcoal/60">
            Every bag of coffee we trade has passed through careful hands and
            exacting standards. This is the journey we manage for our partners —
            from the first seedling to the final handshake.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {journeySteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.08}>
              <article className="group relative overflow-hidden rounded-3xl bg-charcoal">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={step.image}
                  alt={step.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-display text-sm italic text-gold">
                    {step.step}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-medium text-warmwhite">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-warmwhite/80 transition-all duration-500 group-hover:max-h-24">
                    {step.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
