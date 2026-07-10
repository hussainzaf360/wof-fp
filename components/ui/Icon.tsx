import type { LucideIcon } from "lucide-react";
import {
  UtensilsCrossed,
  Palmtree,
  Pizza,
  IceCreamCone,
  Users,
  Plug,
  Armchair,
  Megaphone,
  Clock,
  MapPin,
  Phone,
  Mail,
  Star,
  Quote,
  ArrowRight,
  ArrowLeft,
  Navigation,
  Send,
  Heart,
  Sun,
  Home,
  Tag,
  Calendar,
  Leaf,
} from "lucide-react";

/** Semantic icon keys used throughout the data files. */
const registry: Record<string, LucideIcon> = {
  "utensils-crossed": UtensilsCrossed,
  palmtree: Palmtree,
  pizza: Pizza,
  "ice-cream-cone": IceCreamCone,
  users: Users,
  plug: Plug,
  armchair: Armchair,
  megaphone: Megaphone,
  clock: Clock,
  "map-pin": MapPin,
  phone: Phone,
  mail: Mail,
  star: Star,
  quote: Quote,
  "arrow-right": ArrowRight,
  "arrow-left": ArrowLeft,
  navigation: Navigation,
  send: Send,
  heart: Heart,
  sun: Sun,
  home: Home,
  tag: Tag,
  calendar: Calendar,
  leaf: Leaf,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.75,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = registry[name] ?? Leaf;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden />;
}
