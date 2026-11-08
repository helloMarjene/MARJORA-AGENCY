"use client";

import { Instagram, Facebook, Music2, Linkedin, Twitter } from "lucide-react";
import { socials, site } from "@/data/site-config";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  instagram: Instagram,
  facebook: Facebook,
  tiktok: Music2,
  linkedin: Linkedin,
  x: Twitter,
};

export default function SocialLinks({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      {socials.map((social) => {
        const Icon = icons[social.id];
        if (!Icon) return null;
        const base = `flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
          dark
            ? "border-warmwhite/20 text-warmwhite/70"
            : "border-charcoal/15 text-charcoal/60"
        }`;
        if (!social.enabled || !social.url) {
          return (
            <span
              key={social.id}
              title={`${social.label} — coming soon`}
              aria-label={`${social.label} (coming soon)`}
              className={`${base} cursor-not-allowed opacity-40`}
            >
              <Icon className="h-4 w-4" />
            </span>
          );
        }
        return (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={`${base} hover:border-gold hover:text-gold`}
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}

export function SocialHandleNote({ dark = false }: { dark?: boolean }) {
  return (
    <p
      className={`text-xs ${dark ? "text-warmwhite/40" : "text-charcoal/50"}`}
    >
      Social profiles launch soon as{" "}
      <span className="font-semibold">@{socials[0].url.split("/").filter(Boolean).pop() || "marjoraagencyafrica"}</span>
    </p>
  );
}
