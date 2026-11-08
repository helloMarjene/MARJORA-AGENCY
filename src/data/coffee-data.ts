export type CoffeeCategory = {
  slug: string;
  name: string;
  image: string;
  description: string;
  characteristics: string[];
};

export const coffeeCategories: CoffeeCategory[] = [
  {
    slug: "robusta-screen-18",
    name: "Robusta Screen 18",
    image: "/images/coffee/robusta-18.jpg",
    description:
      "Our largest-screen robusta, carefully graded for buyers who demand consistent size and presence in every lot.",
    characteristics: ["Screen 18+", "Bold body", "Clean cup", "Export graded"],
  },
  {
    slug: "robusta-screen-15",
    name: "Robusta Screen 15",
    image: "/images/coffee/robusta-15.jpg",
    description:
      "A dependable mid-screen robusta that balances quality and value for roasters and traders alike.",
    characteristics: ["Screen 15", "Balanced profile", "High bulk availability"],
  },
  {
    slug: "robusta-faq",
    name: "Robusta FAQ",
    image: "/images/coffee/faq.jpg",
    description:
      "Fair Average Quality robusta — the workhorse of East African coffee trade, sourced through trusted farm networks.",
    characteristics: ["FAQ grade", "Trade staple", "Reliable supply"],
  },
  {
    slug: "kiboko",
    name: "Kiboko",
    image: "/images/coffee/kiboko.jpg",
    description:
      "Traditionally sun-dried coffee cherries, hulled to order — the foundation of Uganda's domestic and regional trade.",
    characteristics: ["Sun dried", "Hulled to order", "Regional favorite"],
  },
  {
    slug: "arabica",
    name: "Arabica Coffee",
    image: "/images/coffee/arabica.jpg",
    description:
      "High-grown arabica from Uganda's mountain slopes — bright, aromatic and increasingly sought after by specialty buyers.",
    characteristics: ["High altitude", "Bright acidity", "Aromatic"],
  },
];
