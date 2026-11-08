import Hero from "@/components/Hero";
import GiantBean from "@/components/GiantBean";
import CoffeeJourney from "@/components/CoffeeJourney";
import CoffeeSlider from "@/components/CoffeeSlider";
import MarketDestinations from "@/components/MarketDestinations";
import CTABanner from "@/components/CTABanner";
import ImageStory from "@/components/ImageStory";
import MassiveLogo from "@/components/MassiveLogo";
import CoffeeClouds from "@/components/CoffeeClouds";
import fs from "node:fs";
import path from "node:path";

function homeHeroImages() {
  const directory = path.join(process.cwd(), "public", "images", "coffee");
  return fs
    .readdirSync(directory)
    .filter((name) => /^marjora \(\d+\)\.(jpg|jpeg|png|webp)$/i.test(name))
    .sort((a, b) => Number(a.match(/\d+/)?.[0] ?? 0) - Number(b.match(/\d+/)?.[0] ?? 0))
    .slice(0, 16)
    .map((name) => `/images/coffee/${name}`);
}

export default function HomePage() {
  const heroImages = homeHeroImages();
  return (
    <>
      <Hero images={heroImages} />
      <MassiveLogo />
      <ImageStory />
      <GiantBean />
      <CoffeeClouds />
      <CoffeeJourney />
      <CoffeeSlider />
      <MarketDestinations />
      <CTABanner />
    </>
  );
}
