export type StockItem = {
  coffee: string;
  detail: string;
  quantity: number;
  unit: string;
};

export const stockConfig = {
  enabled: true,
  title: "Indicative Sourcing Availability",
  note: "Sample figures shown for illustration — please confirm current availability with our team.",
  rotateMs: 4000,
  items: [
    {
      coffee: "SCREEN 18 ROBUSTA",
      detail: "Large-screen premium robusta",
      quantity: 500,
      unit: "TONNES",
    },
    {
      coffee: "SCREEN 15 ROBUSTA",
      detail: "Mid-screen robusta",
      quantity: 100,
      unit: "TONNES",
    },
    {
      coffee: "ROBUSTA FAQ",
      detail: "Fair Average Quality",
      quantity: 300,
      unit: "TONNES",
    },
    {
      coffee: "KIBOKO",
      detail: "Traditionally dried cherries",
      quantity: 400,
      unit: "TONNES",
    },
  ] as StockItem[],
};
