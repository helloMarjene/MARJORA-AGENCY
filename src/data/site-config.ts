export const site = {
  name: "MARJORA AGENCY",
  tagline: "Connecting Africa Through Trade.",
  description:
    "MARJORA AGENCY connects African coffee suppliers, producers and buyers through professional sourcing, trade facilitation and international market connections.",
  country: "Uganda",
  phones: ["+256 704 125 517", "+256 792 096 974"],
  whatsappNumber: "256704125517",
  logo: "/images/logo/marjora-clean-logo.png",
  bean: "/images/bean/giant-bean.png",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Coffee", href: "/coffee" },
  { label: "Contact", href: "/contact" },
];

export const socials = [
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/marjoraagencyafrica/",
    enabled: false,
  },
  {
    id: "facebook",
    label: "Facebook",
    url: "https://www.facebook.com/marjoraagencyafrica/",
    enabled: false,
  },
  {
    id: "tiktok",
    label: "TikTok",
    url: "https://www.tiktok.com/@marjoraagencyafrica",
    enabled: false,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "",
    enabled: false,
  },
  {
    id: "x",
    label: "X",
    url: "https://x.com/marjoraagencyafrica",
    enabled: false,
  },
];

export const heroClips = Array.from(
  { length: 10 },
  (_, i) => `/videos/hero/clip${i + 1}.mp4`
);

export const heroMessages = [
  "Connecting Africa Through Trade.",
  "From Uganda's Coffee Farms to Global Markets.",
  "Building Bridges Between Coffee Suppliers and Buyers.",
  "Sourcing Africa's Finest Coffee.",
  "Connecting Coffee Producers to New Opportunities.",
];
