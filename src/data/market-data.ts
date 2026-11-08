export type Market = {
  country: string;
  note: string;
  role?: string;
};

export const marketsConfig = {
  title: "Connecting African Markets",
  intro:
    "From our base in Uganda we are building trade relationships across the region. These are the markets we are actively working to connect — our network grows with every conversation.",
  base: { country: "Uganda", role: "Home Base" } as Market,
  markets: [
    { country: "Democratic Republic of Congo", note: "Regional cross-border trade" },
    { country: "Rwanda", note: "Growing regional demand" },
    { country: "Kenya", note: "East African trade hub" },
    { country: "Tanzania", note: "Coastal market access" },
    { country: "South Sudan", note: "Emerging northern corridor" },
  ] as Market[],
  footer:
    "We do not claim completed exports to these markets until a verified trade record exists. This section is updated as the business grows.",
};
