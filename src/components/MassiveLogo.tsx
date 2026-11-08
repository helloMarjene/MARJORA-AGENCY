"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { site } from "@/data/site-config";

export default function MassiveLogo() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, -6, 3]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-16, 13, -5]);
  const scale = useTransform(scrollYProgress, [0, 0.45, 0.75, 1], [0.78, 1.12, 1.28, 0.96]);
  const y = useTransform(scrollYProgress, [0, 0.7, 1], ["4vh", "0vh", "-18vh"]);

  return (
    <section ref={ref} className="relative h-[220vh] overflow-hidden bg-[#dfeee9]">
      <div className="sticky top-0 flex h-screen items-center justify-center px-6">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent" />
      <div className="relative mx-auto w-full max-w-6xl text-center" style={{ perspective: 1400 }}>
        <p className="text-xs font-bold uppercase tracking-[0.45em] text-coffee">
          MARJORA AGENCY
        </p>
        <motion.div
          style={
            reduced
              ? undefined
              : { y, scale, rotateX, rotateY, transformStyle: "preserve-3d" }
          }
          className="relative mx-auto mt-4 origin-center drop-shadow-[0_35px_28px_rgba(45,32,20,0.32)] md:mt-7"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={site.logo}
            alt="MARJORA AGENCY"
            className="mx-auto h-auto w-full max-w-[980px] object-contain"
            draggable={false}
          />
        </motion.div>
        <p className="mx-auto mt-8 max-w-2xl font-display text-3xl text-charcoal md:text-5xl">
          Connecting Africa Through Trade.
        </p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>
    </section>
  );
}
