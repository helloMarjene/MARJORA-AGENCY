import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "lucide-react";
import { coffeeCategories } from "@/data/coffee-data";

export default function CoffeeCategories() {
  return (
    <div className="space-y-24">
      {coffeeCategories.map((coffee, i) => (
        <Reveal key={coffee.slug}>
          <article
            className={`flex flex-col items-center gap-10 md:gap-14 lg:flex-row ${
              i % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="group relative w-full flex-1 overflow-hidden rounded-[2rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={coffee.image}
                alt={coffee.name}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-5 top-5 rounded-full bg-black/40 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-warmwhite backdrop-blur-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="w-full flex-1">
              <h2 className="font-display text-3xl font-medium text-charcoal md:text-4xl">
                {coffee.name}
              </h2>
              <p className="mt-5 max-w-lg leading-relaxed text-charcoal/65">
                {coffee.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {coffee.characteristics.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-charcoal/15 bg-warmwhite px-4 py-1.5 text-xs font-semibold text-charcoal/70"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <Link
                href={`/lets-talk?interest=${encodeURIComponent(coffee.name)}`}
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-bold text-warmwhite transition-colors hover:bg-coffee"
              >
                Enquire About {coffee.name}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
