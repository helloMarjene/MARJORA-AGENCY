"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedStock from "@/components/AnimatedStock";
import { heroMessages } from "@/data/site-config";
import { stockConfig } from "@/data/stock-data";

export default function Hero({ images = [] }: { images?: string[] }) {
  const [messageIndex, setMessageIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setMessageIndex((i) => (i + 1) % heroMessages.length),
      5000
    );
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!images.length) return;
    const t = setInterval(
      () => setImageIndex((i) => (i + 1) % images.length),
      6500
    );
    return () => clearInterval(t);
  }, [images]);

  return (
    <section className="relative flex min-h-svh items-end overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          {(images.length ? images : ["/images/hero/hero-poster.jpg"]).map((image, index) => (
            <motion.img
              key={image}
              src={image}
              alt=""
              initial={{ opacity: index === imageIndex ? 1 : 0, scale: 1.08 }}
              animate={{
                opacity: index === imageIndex ? 1 : 0,
                scale: index === imageIndex ? 1 : 1.08,
              }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ))}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-40">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-5 text-xs font-bold uppercase tracking-[0.4em] text-gold"
        >
          African Coffee Sourcing &amp; Trading — Uganda
        </motion.p>

        <div className="min-h-[150px] md:min-h-[190px]">
          <AnimatePresence mode="wait">
            <motion.h1
              key={messageIndex}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -32 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl font-display text-4xl font-medium leading-[1.08] text-warmwhite sm:text-6xl md:text-7xl"
            >
              {heroMessages[messageIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 max-w-xl text-base leading-relaxed text-warmwhite/80 md:text-lg"
        >
          We connect coffee producers, suppliers and buyers across Africa —
          sourcing quality coffee and building the trade relationships that
          move it to market.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/coffee"
            className="group flex items-center gap-2 rounded-full bg-warmwhite px-7 py-3.5 text-sm font-bold text-charcoal transition-colors hover:bg-gold"
          >
            Explore Our Coffee
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/lets-talk"
            className="rounded-full border border-warmwhite/40 px-7 py-3.5 text-sm font-bold text-warmwhite transition-colors hover:border-gold hover:text-gold"
          >
            Let&apos;s Talk
          </Link>
        </motion.div>

        {stockConfig.enabled && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12"
          >
            <AnimatedStock />
          </motion.div>
        )}
      </div>
    </section>
  );
}
