import fs from "node:fs";
import path from "node:path";
import Reveal from "@/components/Reveal";

const stories = [
  {
    eyebrow: "Source Directly",
    title: "From Ugandan Farms",
    text: "We work close to the source, building dependable relationships with farmers, cooperatives and suppliers across Uganda.",
  },
  {
    eyebrow: "Know Every Lot",
    title: "Quality With Proof",
    text: "Every opportunity starts with clear specifications, careful quality conversations and transparent communication.",
  },
  {
    eyebrow: "Trade Across Africa",
    title: "Markets Without Borders",
    text: "MARJORA AGENCY connects regional coffee supply to commercial buyers through a growing African trade network.",
  },
  {
    eyebrow: "Build Lasting Value",
    title: "Trade That Creates Opportunity",
    text: "Our objective is simple: create stronger relationships that benefit producers, suppliers and buyers over the long term.",
  },
];

function galleryImages() {
  const directory = path.join(process.cwd(), "public", "images", "coffee");
  return fs
    .readdirSync(directory)
    .filter((name) => /^marjora \(\d+\)\.(jpg|jpeg|png|webp)$/i.test(name))
    .sort((a, b) => {
      const aNumber = Number(a.match(/\d+/)?.[0] ?? 0);
      const bNumber = Number(b.match(/\d+/)?.[0] ?? 0);
      return aNumber - bNumber;
    })
    .map((name) => `/images/coffee/${name}`);
}

export default function ImageStory() {
  const images = galleryImages();

  return (
    <section className="bg-warmwhite">
      {stories.map((story, index) => {
        const image = images[index * 5] ?? "/images/coffee/arabica.jpg";
        return (
          <div key={story.title} className="relative overflow-hidden border-b border-charcoal/10">
            <div className="grid min-h-[72vh] lg:grid-cols-2">
              <div className={`relative min-h-[52vh] overflow-hidden ${index % 2 ? "lg:order-2" : ""}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt={story.title}
                  loading="lazy"
                  className="absolute inset-0 h-[115%] w-full object-cover"
                />
              </div>
              <div className="flex items-center px-6 py-20 sm:px-12 lg:px-16">
                <Reveal>
                  <p className="text-xs font-bold uppercase tracking-[0.35em] text-coffee">
                    {story.eyebrow}
                  </p>
                  <h2 className="mt-5 font-display text-5xl font-medium leading-[0.95] text-charcoal sm:text-7xl">
                    {story.title}
                  </h2>
                  <p className="mt-7 max-w-xl text-lg leading-relaxed text-charcoal/65">
                    {story.text}
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
