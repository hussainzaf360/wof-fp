export type MenuItem = {
  name: string;
  description: string;
  price: string;
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};

export type Vendor = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  /** semantic icon key mapped in components/ui/Icon.tsx */
  icon: string;
  cardBlurb: string;
  heroBlurb: string;
  story: { heading: string; paragraphs: string[] };
  images: { card: string; hero: string; story: string };
  logo?: string;
  menu: MenuSection[];
  menuNote?: string;
  hasContactForm?: boolean;
};

export type ComingSoonVendor = {
  comingSoon: true;
  label: string;
  teaser: string;
  icon: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export type Benefit = {
  icon: string;
  title: string;
  body: string;
};

export type Step = {
  title: string;
  body: string;
};
