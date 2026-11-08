import Reveal from "@/components/Reveal";

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <header className="relative flex min-h-[58vh] items-end overflow-hidden bg-charcoal pb-16 pt-40">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/25" />
      <div className="absolute inset-x-0 bottom-6 overflow-hidden" aria-hidden="true">
        <p className="translate-x-[-2%] whitespace-nowrap font-display text-[18vw] font-semibold leading-none text-white/[0.07]">
          MARJORA
        </p>
      </div>
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-gold">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium text-warmwhite md:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl leading-relaxed text-warmwhite/80">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </header>
  );
}
