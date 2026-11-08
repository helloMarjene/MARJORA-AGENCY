"use client";

import { useRef } from "react";
import { motion, type MotionValue, useScroll, useTransform } from "framer-motion";

const beans = [
  { left: "7%", top: "12%", size: 190, y: ["-8vh", "30vh"], rotate: [-18, -10] },
  { left: "76%", top: "9%", size: 230, y: ["8vh", "-22vh"], rotate: [12, 20] },
  { left: "43%", top: "25%", size: 150, y: ["0vh", "42vh"], rotate: [24, 32] },
  { left: "14%", top: "62%", size: 270, y: ["15vh", "-35vh"], rotate: [-10, -18] },
  { left: "72%", top: "66%", size: 190, y: ["-12vh", "28vh"], rotate: [18, 26] },
  { left: "42%", top: "78%", size: 230, y: ["30vh", "-20vh"], rotate: [-22, -14] },
];

function FloatingBean({
  bean,
  progress,
}: {
  bean: (typeof beans)[number];
  progress: MotionValue<number>;
}) {
  const y = useTransform(progress, [0, 1], bean.y);
  const rotation = useTransform(progress, [0, 1], bean.rotate);

  return (
    <motion.img
      src="/images/bean/giant-bean.png"
      alt=""
      style={{ left: bean.left, top: bean.top, width: bean.size, y, rotate: rotation }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 0.88, scale: 1 }}
      transition={{ duration: 1.2 }}
      className="absolute z-10 drop-shadow-[0_35px_30px_rgba(0,0,0,0.18)]"
    />
  );
}

export default function CoffeeClouds() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const cloudOneY = useTransform(scrollYProgress, [0, 1], ["0px", "-260px"]);
  const cloudTwoY = useTransform(scrollYProgress, [0, 1], ["180px", "-220px"]);
  const cloudThreeY = useTransform(scrollYProgress, [0, 1], ["40px", "-420px"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0vh", "-12vh"]);

  return (
    <section ref={ref} className="relative h-[210vh] overflow-hidden bg-[#dfece7]">
      <motion.div style={{ y: cloudOneY }} className="absolute -left-[12%] top-[6%] h-[36vh] w-[58vw] rounded-[50%] bg-white/95 blur-[35px]" />
      <motion.div style={{ y: cloudTwoY }} className="absolute -right-[12%] top-[32%] h-[44vh] w-[62vw] rounded-[50%] bg-white blur-[45px]" />
      <motion.div style={{ y: cloudThreeY }} className="absolute left-[18%] top-[68%] h-[42vh] w-[58vw] rounded-[50%] bg-white/90 blur-[55px]" />
      <div className="absolute inset-x-0 top-0 z-20 h-56 bg-gradient-to-b from-white via-white/95 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-30 h-72 bg-gradient-to-t from-white via-white/95 to-transparent" />

      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <motion.div style={{ y: titleY }} className="relative z-20 max-w-3xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-coffee">Coffee in Motion</p>
          <h2 className="mt-5 font-display text-5xl font-medium text-charcoal md:text-8xl">
            Africa&apos;s Coffee,<br />Moving Forward.
          </h2>
        </motion.div>
        {beans.map((bean, index) => (
          <FloatingBean key={index} bean={bean} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
