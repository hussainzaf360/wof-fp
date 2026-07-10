export const site = {
  name: "World of Flavors",
  longName: "World of Flavors Food Park",
  tagline: "Explore the world, one cart at a time.",
  description:
    "Salem's premier food cart park — diverse global cuisines with indoor and outdoor seating in a warm, family-friendly atmosphere.",
  city: "Salem, Oregon",
  address: { line1: "1321 Smith St NE", line2: "Salem, OR 97301" },
  addressString: "1321 Smith St NE, Salem, OR 97301",
  hours: "11:00 AM – 10:00 PM Daily",
  hoursShort: "11 AM – 10 PM · 7 days",
  openHourLabel: "11:00 AM",
  closeHourLabel: "10:00 PM",
  phone: "+1 503-383-4678",
  phoneHref: "tel:+15033834678",
  email: "WOFFOODPARK@GMAIL.COM",
  emailHref: "mailto:WOFFOODPARK@GMAIL.COM",
  facebook: "https://www.facebook.com/profile.php?id=61577951203120",
  mapsEmbed:
    "https://www.google.com/maps?q=1321+Smith+St+NE,+Salem,+OR+97301&output=embed",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=1321%20Smith%20St%20NE%2C%20Salem%2C%20OR%2097301",
  rating: "5.0",
} as const;

/** Primary navigation used by the header and footer. */
export const nav = [
  { label: "Our Story", href: "/#about" },
  { label: "Vendors", href: "/vendors" },
  { label: "Rent Space", href: "/opportunity" },
  { label: "Visit Us", href: "/#visit" },
] as const;

/** Rotating cuisines for the marquee ticker. */
export const cuisines = [
  "Middle Eastern",
  "Pacific Island",
  "Hawaiian Plate Lunch",
  "Chamorro",
  "Shawarma",
  "Poke Bowls",
  "Falafel",
  "Filipino",
  "Street Eats",
  "Family Owned",
] as const;
