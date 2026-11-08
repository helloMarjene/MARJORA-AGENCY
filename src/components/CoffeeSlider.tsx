import fs from "node:fs";
import path from "node:path";
import Reveal from "@/components/Reveal";

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

function getImages(directory: string): string[] {
  if (!fs.existsSync(directory)) return [];

  return fs
    .readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) => {
      const absolutePath = path.join(directory, entry.name);
      if (entry.isDirectory()) return getImages(absolutePath);
      return imageExtensions.has(path.extname(entry.name).toLowerCase())
        ? [absolutePath]
        : [];
    });
}

function imageLabel(fileName: string) {
  return fileName
    .replace(/\.(jpg|jpeg|png|webp|avif)$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export default function CoffeeSlider() {
  const publicDirectory = path.join(process.cwd(), "public", "images");
  const items = getImages(publicDirectory)
    .filter((file) => {
      const relativePath = path.relative(publicDirectory, file).replaceAll("\\", "/");
      return !relativePath.startsWith("logo/") && !relativePath.startsWith("bean/");
    })
    .sort((a, b) => a.localeCompare(b))
    .map((file) => {
      const relativePath = path.relative(publicDirectory, file).replaceAll("\\", "/");
      const fileName = path.basename(file);
      return {
        src: `/images/${relativePath}`,
        alt: fileName.toLowerCase().includes("majora")
          ? `Majora ${imageLabel(fileName)}`
          : imageLabel(fileName),
        wide: /robusta|hero|about|contact/.test(relativePath.toLowerCase()),
      };
    });
  const doubled = items.length ? [...items, ...items] : [];

  return (
    <section className="overflow-hidden bg-cream py-20">
      <Reveal className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-coffee">
          Inside the Industry
        </p>
        <h2 className="mt-3 font-display text-3xl font-medium text-charcoal md:text-4xl">
          The World Behind the Bean
        </h2>
      </Reveal>

      <div className="mt-12 overflow-hidden" aria-label="Marjora coffee gallery">
        <div className="flex w-max animate-marquee gap-5 px-4 motion-reduce:animate-none">
          {doubled.map((item, i) => (
            <figure
              key={i}
              className={`relative shrink-0 overflow-hidden rounded-2xl ${
                item.wide ? "h-64 w-96" : "h-64 w-72"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-sm font-semibold text-warmwhite">
                {item.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
