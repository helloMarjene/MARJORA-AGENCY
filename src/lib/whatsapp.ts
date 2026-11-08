import { site } from "@/data/site-config";

export type Enquiry = {
  name: string;
  company: string;
  country: string;
  email: string;
  phone: string;
  enquiryType: string;
  coffeeInterest: string;
  quantity: string;
  message: string;
};

export const enquiryTypes = [
  "Buyer",
  "Supplier",
  "Producer",
  "Business Partner",
  "Other",
];

export function buildEnquiryMessage(e: Enquiry): string {
  return [
    "MARJORA AGENCY WEBSITE ENQUIRY",
    `Name: ${e.name}`,
    `Company: ${e.company || "—"}`,
    `Country: ${e.country}`,
    `Email: ${e.email}`,
    `Phone: ${e.phone}`,
    `Enquiry Type: ${e.enquiryType}`,
    `Coffee Interest: ${e.coffeeInterest || "—"}`,
    `Estimated Quantity: ${e.quantity || "—"}`,
    `Message: ${e.message || "—"}`,
    "Please contact me regarding this enquiry.",
  ].join("\n");
}

export function whatsappUrl(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
