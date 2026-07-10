import type { Vendor, ComingSoonVendor } from "@/types";

export const vendors: Vendor[] = [
  {
    slug: "shawarma-house",
    name: "Shawarma House",
    category: "Middle Eastern",
    tagline: "Middle Eastern street food",
    icon: "utensils-crossed",
    cardBlurb:
      "Authentic shawarma, falafel, and wraps packed with bold, slow-marinated flavor.",
    heroBlurb:
      "Slow-marinated meats, house-made sauces, and fresh-baked flatbread. Every wrap is built to order the way it's done back home.",
    story: {
      heading: "Flavor Worth the Wait",
      paragraphs: [
        "Shawarma House brings authentic Middle Eastern street food to Salem, with recipes passed down through generations. Meats are marinated overnight in a blend of warm spices, then roasted slowly on the vertical spit for that signature crispy-tender bite.",
        "Everything is made fresh daily, from the garlic toum to the pickled turnips. Whether you're grabbing a quick wrap on your lunch break or feeding the whole family, you'll taste the care in every bite.",
      ],
    },
    images: {
      card: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80&w=1200",
      hero: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80&w=1920",
      story:
        "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&q=80&w=1200",
    },
    // Placeholder photos — swap in real Shawarma House shots when available.
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80&w=1200",
        caption: "Chicken shawarma wrap, built to order",
      },
      {
        src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1200",
        caption: "Skewers grilled to order",
      },
      {
        src: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=1200",
        caption: "Shawarma plate over seasoned rice",
      },
      {
        src: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&q=80&w=1200",
        caption: "Fresh off the grill",
      },
      {
        src: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?auto=format&fit=crop&q=80&w=1200",
        caption: "Wraps drizzled in house-made garlic sauce",
      },
      {
        src: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=1200",
        caption: "Fresh-baked bread, warm from the oven",
      },
    ],
    hasContactForm: true,
    menuNote:
      "Menu items and prices are samples — swap in the vendor's real menu when ready.",
    menu: [
      {
        title: "Wraps & Plates",
        items: [
          {
            name: "Chicken Shawarma Wrap",
            description: "Marinated chicken, garlic toum, pickles, fresh veg",
            price: "$10",
          },
          {
            name: "Beef & Lamb Shawarma Wrap",
            description: "Slow-roasted beef and lamb, tahini, tomato, onion",
            price: "$12",
          },
          {
            name: "Shawarma Plate",
            description: "Your choice of meat over rice with salad and sauce",
            price: "$15",
          },
        ],
      },
      {
        title: "Vegetarian",
        items: [
          {
            name: "Falafel Wrap",
            description: "Crispy falafel, hummus, tahini, fresh vegetables",
            price: "$9",
          },
          {
            name: "Mezze Plate",
            description: "Hummus, baba ganoush, falafel, pita, and salad",
            price: "$13",
          },
        ],
      },
      {
        title: "Sides & Extras",
        items: [
          {
            name: "Loaded Fries",
            description: "Fries topped with shawarma, garlic sauce, and pickles",
            price: "$8",
          },
          {
            name: "Baklava",
            description: "Flaky pastry with honey and pistachios",
            price: "$4",
          },
        ],
      },
    ],
  },
  {
    slug: "island-bitez",
    name: "Island Bitez",
    category: "Pacific Island",
    tagline: "Chamorro & Hawaiian plate lunches",
    icon: "palmtree",
    cardBlurb:
      "Chamorro and Hawaiian-style plate lunches, poke bowls, and island favorites piled high.",
    heroBlurb:
      "Authentic Chamorro and Hawaiian-style plate lunches, poke bowls, and island favorites. Real recipes, big portions, and a whole lot of aloha in every bite.",
    logo: "/images/island-bitez-logo.jpeg",
    story: {
      heading: "A Taste of the Pacific",
      paragraphs: [
        "Island Bitez brings the flavors of the Pacific Islands to Salem, blending Chamorro, Hawaiian, and Filipino traditions into hearty, made-with-love plate lunches. Think crispy pork belly, tender BBQ chicken and kalbi, fresh poke, and that signature Chamorro red rice.",
        "Every plate comes loaded with two scoops of rice and creamy mac salad, just like back home. Come hungry, leave happy, and taste why the islands do comfort food best.",
      ],
    },
    images: {
      card: "/images/island-bitez-food.webp",
      hero: "/images/island-bitez-food.webp",
      story: "/images/island-bitez-food.webp",
    },
    // Leads with Island Bitez's real photo; the rest are placeholders to swap out.
    gallery: [
      {
        src: "/images/island-bitez-food.webp",
        caption: "Island plate lunch — two scoops rice & mac salad",
      },
      {
        src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1200",
        caption: "Fresh poke, made daily",
      },
      {
        src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=1200",
        caption: "Island-style BBQ, grilled to order",
      },
      {
        src: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=1200",
        caption: "Seafood rice, island-style",
      },
      {
        src: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&q=80&w=1200",
        caption: "House chicken pancit",
      },
    ],
    hasContactForm: true,
    menuNote:
      "Prices from Island Bitez's online menu and may vary in person. Menu items subject to availability.",
    menu: [
      {
        title: "Plate Lunches",
        items: [
          {
            name: "Island BBQ Chicken Plate",
            description:
              "2 scoops white rice, mac salad, and tender island-style BBQ chicken",
            price: "$18.94",
          },
          {
            name: "Island BBQ Kalbi Plate",
            description:
              "2 scoops white rice, mac salad, and tender marinated BBQ kalbi",
            price: "$22.05",
          },
        ],
      },
      {
        title: "Island Favorites",
        items: [
          {
            name: "Island Fiesta Plate",
            description:
              "2 scoops red rice, mac salad, chicken kelaguen, BBQ chicken, BBQ kalbi, finadene & pepperoncini",
            price: "$24.25",
          },
          {
            name: "Pancit Crunch Plate",
            description:
              "Crispy fried pork belly, chicken pancit, 2 scoops white rice, mac salad, finadene & pepperoncini",
            price: "$21.00",
          },
          {
            name: "Ahi Poke Nachos",
            description:
              "Crispy wonton chips, spicy ahi poke, sriracha aioli, kabayaki glaze, onions, tomatoes & furikake",
            price: "$23.10",
          },
        ],
      },
      {
        title: "Bowls",
        items: [
          {
            name: "Chicken Katsu Bowl",
            description:
              "Crispy chicken katsu over furikake white rice with house katsu sauce",
            price: "$11.57",
          },
          {
            name: "Island BBQ Chicken Bowl",
            description: "Grilled BBQ chicken over white rice, island-style",
            price: "$10.50",
          },
          {
            name: "Shoyu Ahi Poke Bowl",
            description:
              "Fresh ahi tuna marinated in shoyu, sesame oil & onions over rice",
            price: "$12.60",
          },
          {
            name: "Island Coconut Poke",
            description:
              "Coconut cream poke with onions, cucumber & tomatoes over rice",
            price: "$12.60",
          },
        ],
      },
      {
        title: "Musubi & Sides",
        items: [
          {
            name: "Island Bitez Musubi",
            description:
              "Chamorro red rice & seared Spam glazed in a signature house sauce",
            price: "$4.20",
          },
          {
            name: "Spam Musubi",
            description: "Classic savory Spam over rice, wrapped in nori",
            price: "$3.15",
          },
          {
            name: "Red Rice",
            description: "Chamorro-style red rice made with annatto",
            price: "$4.20",
          },
          {
            name: "Mac Salad",
            description: "Creamy island-style macaroni salad",
            price: "$3.15",
          },
          {
            name: "White Rice",
            description: "Side of steamed white rice",
            price: "$3.15",
          },
        ],
      },
      {
        title: "Drinks",
        items: [
          {
            name: "King Car Lemon Tea",
            description: "Refreshing island-style lemon tea",
            price: "$3.68",
          },
          {
            name: "Hawaiian Sun",
            description: "Tropical island juice drink",
            price: "$3.15",
          },
          {
            name: "Coke / Coke Zero / Sprite",
            description: "Ice-cold canned soda",
            price: "$2.10",
          },
          { name: "Capri Sun", description: "Juice pouch", price: "$1.05" },
          { name: "Water", description: "Bottled water", price: "$1.58" },
        ],
      },
    ],
  },
];

/** Placeholder cards shown on the vendors grid for future carts. */
export const comingSoonVendors: ComingSoonVendor[] = [
  {
    comingSoon: true,
    label: "Coming Soon",
    teaser:
      "A new cart is joining the lineup — fresh flavors landing at the park soon.",
    icon: "pizza",
  },
  {
    comingSoon: true,
    label: "Coming Soon",
    teaser:
      "Got a food concept? This spot could be yours. Reach out about renting space.",
    icon: "ice-cream-cone",
  },
];

export const vendorSlugs = vendors.map((v) => v.slug);

export function getVendor(slug: string): Vendor | undefined {
  return vendors.find((v) => v.slug === slug);
}
