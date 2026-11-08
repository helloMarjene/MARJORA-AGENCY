"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { site } from "@/data/site-config";

type BeanLabel = {
  title: string;
  detail: string;
  pos: { left?: string; right?: string; top?: string; bottom?: string };
  line: "left" | "right";
  start: number;
};

const labels: BeanLabel[] = [
  {
    title: "Convex Side",
    detail: "The rounded outer face of the seed",
    pos: { left: "6%", top: "22%" },
    line: "right",
    start: 0.1,
  },
  {
    title: "Central Crease",
    detail: "The ventral groove running down the bean",
    pos: { right: "6%", top: "22%" },
    line: "left",
    start: 0.2,
  },
  {
    title: "Outer Surface",
    detail: "Silverskin and seed coat protecting the bean",
    pos: { left: "10%", bottom: "22%" },
    line: "right",
    start: 0.3,
  },
  {
    title: "Seed Structure",
    detail: "The endosperm — starch & protein that shape the cup",
    pos: { right: "8%", bottom: "24%" },
    line: "left",
    start: 0.4,
  },
  {
    title: "Flat Side",
    detail: "The face where the two seed halves meet",
    pos: { left: "38%", top: "9%" },
    line: "right",
    start: 0.5,
  },
];

function BeanLabelCard({ label, progress }: { label: BeanLabel; progress: any }) {
  const opacity = useTransform(
    progress,
    [label.start, label.start + 0.06, 0.74, 0.8],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    progress,
    [label.start, label.start + 0.06],
    [16, 0]
  );

  return (
    <motion.div
      style={{ ...label.pos, opacity, y }}
      className="absolute z-20 max-w-[190px]"
    >
      <div
        className={`flex items-center gap-3 ${
          label.line === "left" ? "flex-row-reverse text-right" : ""
        }`}
      >
        <span className="relative mt-1 h-2 w-2 shrink-0 rounded-full bg-gold shadow-[0_0_12px_2px_rgba(198,161,91,0.7)]">
          <span
            className={`absolute top-1/2 h-px w-8 bg-gold/60 ${
              label.line === "right" ? "left-full" : "right-full"
            }`}
          />
        </span>
        <div>
          <p className="text-sm font-bold tracking-wide text-warmwhite">
            {label.title}
          </p>
          <p className="mt-0.5 text-xs leading-snug text-warmwhite/60">
            {label.detail}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function GiantBean() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-26, 16]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [8, -7, 4]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-18, 14, -8]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.45, 0.8, 1],
    [0.78, 1.55, 2.05, 1.38]
  );
  const y = useTransform(scrollYProgress, [0, 0.72, 1], ["0vh", "0vh", "44vh"]);
  const headingOpacity = useTransform(
    scrollYProgress,
    [0, 0.06, 0.3, 0.42],
    [0, 1, 1, 0]
  );
  const headingY = useTransform(scrollYProgress, [0, 0.42], [50, -30]);
  if (reduced) {
    return (
      <section className="bg-charcoal py-24 text-warmwhite">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-gold">
            Know Your Coffee
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium md:text-5xl">
            The Heart of Our Trade
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-warmwhite/70">
            Every journey begins with a seed. From carefully cultivated coffee
            farms to international markets, we connect the people and processes
            behind every coffee bean.
          </p>
          <div className="relative mx-auto mt-10 max-w-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={site.bean}
              alt="Giant roasted coffee bean"
              className="w-full drop-shadow-[0_30px_45px_rgba(0,0,0,0.45)]"
            />
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {labels.map((l) => (
              <span
                key={l.title}
                className="rounded-full border border-gold/30 px-4 py-2 text-xs font-semibold text-gold"
              >
                {l.title} — {l.detail}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[340vh] bg-charcoal">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity: headingOpacity, y: headingY }}
          className="absolute top-[9%] z-20 mx-auto max-w-2xl px-6 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-gold">
            Know Your Coffee
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium text-warmwhite md:text-6xl">
            The Heart of Our Trade
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-warmwhite/70 md:text-base">
            Every journey begins with a seed. From carefully cultivated coffee
            farms to international markets, we connect the people and processes
            behind every coffee bean.
          </p>
        </motion.div>

        {labels.map((label) => (
          <BeanLabelCard key={label.title} label={label} progress={scrollYProgress} />
        ))}

        <motion.div
          style={{ rotate, rotateX, rotateY, scale, y, perspective: 1200 }}
          className="relative z-10 origin-center"
          initial={false}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={site.bean}
            alt="Giant roasted coffee bean"
            className="w-[112vmin] max-w-[1100px] drop-shadow-[0_45px_55px_rgba(0,0,0,0.55)]"
            draggable={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
