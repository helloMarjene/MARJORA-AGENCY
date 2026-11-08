export type JourneyStep = {
  step: string;
  title: string;
  image: string;
  text: string;
};

export const journeySteps: JourneyStep[] = [
  {
    step: "01",
    title: "Cultivation",
    image: "/images/journey/cultivation.jpg",
    text: "It begins on the farm — seedlings raised in rich volcanic soil under the equatorial sun.",
  },
  {
    step: "02",
    title: "Harvesting",
    image: "/images/journey/harvesting.jpg",
    text: "Ripe red cherries are picked by hand, selectively and at peak ripeness.",
  },
  {
    step: "03",
    title: "Processing",
    image: "/images/journey/processing.jpg",
    text: "Cherries are pulped, washed and dried with care to protect cup quality.",
  },
  {
    step: "04",
    title: "Sorting & Grading",
    image: "/images/journey/sorting.jpg",
    text: "Beans are sorted and graded by screen size, density and defect count.",
  },
  {
    step: "05",
    title: "Packaging",
    image: "/images/journey/packaging.jpg",
    text: "Green coffee is bagged in breathable jute, sealed and documented for export.",
  },
  {
    step: "06",
    title: "Transport & Trade",
    image: "/images/journey/export.jpg",
    text: "From warehouse to port to buyer — we manage the journey across borders.",
  },
];
