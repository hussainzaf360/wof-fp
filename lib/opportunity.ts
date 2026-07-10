import type { Benefit, Step } from "@/types";

export const benefits: Benefit[] = [
  {
    icon: "users",
    title: "Built-In Foot Traffic",
    body: "A high-traffic location with regulars who come hungry and ready to try something new.",
  },
  {
    icon: "plug",
    title: "Utility Hookups",
    body: "Power and water connections ready to go, so your cart is up and running from day one.",
  },
  {
    icon: "armchair",
    title: "Shared Seating",
    body: "Indoor and outdoor seating means guests stay, relax, and order more from every cart.",
  },
  {
    icon: "megaphone",
    title: "Marketing Support",
    body: "We promote the park and its vendors across social media and local events, all year round.",
  },
];

export const steps: Step[] = [
  {
    title: "Reach Out",
    body: "Fill out the inquiry form and tell us about your cart, your food concept, and your timeline.",
  },
  {
    title: "Tour & Talk",
    body: "We'll walk you through the park, talk pricing and logistics, and make sure it's the right fit for both of us.",
  },
  {
    title: "Set Up & Serve",
    body: "Get your hookups connected, roll your cart in, and start serving Salem. We'll help spread the word.",
  },
];

export const opportunityDetails = {
  pricing:
    "Competitive monthly rates built to help your business grow, not just get by. Pricing depends on your cart size and hookup needs.",
  pricingNote: "[Add specific monthly rate or starting price here once confirmed.]",
  availability:
    "We have a limited number of spaces open for new and unique food concepts. Spots fill up, so the sooner you reach out the better.",
  availabilityNote: "[Add number of open spaces or next available date here.]",
};
