"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { heroClips } from "@/data/site-config";

const CLIP_MS = 10000;

export default function HeroVideo() {
  const [available, setAvailable] = useState<string[]>(heroClips);
  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);
  const refs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const advance = useCallback(() => {
    setActive((a) => (available.length ? (a + 1) % available.length : 0));
  }, [available.length]);

  useEffect(() => {
    if (reduced || available.length <= 1) return;
    const t = setInterval(advance, CLIP_MS);
    return () => clearInterval(t);
  }, [reduced, available.length, advance]);

  useEffect(() => {
    refs.current.forEach((video, i) => {
      if (!video) return;
      if (i === active) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [active]);

  const handleError = (src: string) => {
    setAvailable((prev) => {
      if (!prev.includes(src) || prev.length <= 1) return prev;
      const next = prev.filter((s) => s !== src);
      setActive((a) => (a >= next.length ? 0 : a));
      return next;
    });
  };

  if (reduced || available.length === 0) {
    return (
      <img
        src="/images/hero/hero-poster.jpg"
        alt=""
        className="h-full w-full object-cover"
      />
    );
  }

  return (
    <>
      {available.map((src, i) => (
        <video
          key={src}
          ref={(el) => {
            refs.current[i] = el;
          }}
          src={src}
          muted
          playsInline
          preload={i === active ? "auto" : "none"}
          onEnded={advance}
          onError={() => handleError(src)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </>
  );
}
