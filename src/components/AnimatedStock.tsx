"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { stockConfig } from "@/data/stock-data";

export default function AnimatedStock() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % stockConfig.items.length),
      stockConfig.rotateMs
    );
    return () => clearInterval(t);
  }, []);

  const item = stockConfig.items[index];

  return (
    <div className="w-full max-w-md rounded-2xl border border-white/15 bg-black/30 p-5 backdrop-blur-md">
      <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-gold">
        {stockConfig.title}
      </p>
      <div className="mt-3 flex items-end justify-between gap-4">
        <div className="min-h-[64px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.coffee}
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -18, opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <p className="font-display text-4xl font-medium text-warmwhite">
                {item.quantity}{" "}
                <span className="text-xl text-gold">{item.unit}</span>
              </p>
              <p className="mt-1 text-sm font-semibold tracking-wide text-warmwhite/90">
                {item.coffee}
              </p>
              <p className="text-xs text-warmwhite/60">{item.detail}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex flex-col gap-1.5">
          {stockConfig.items.map((s, i) => (
            <button
              key={s.coffee}
              onClick={() => setIndex(i)}
              aria-label={s.coffee}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-gold" : "w-1.5 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
      <p className="mt-3 border-t border-white/10 pt-3 text-[11px] leading-relaxed text-warmwhite/50">
        {stockConfig.note}
      </p>
    </div>
  );
}
