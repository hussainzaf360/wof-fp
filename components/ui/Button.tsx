import Link from "next/link";

type Variant = "brass" | "outline" | "dark" | "paper";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-all duration-300 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-3";

const variants: Record<Variant, string> = {
  brass:
    "bg-brass text-ink hover:bg-brass-200 shadow-[0_10px_30px_-12px_rgba(203,161,90,0.7)]",
  outline:
    "border border-cream/25 text-cream hover:bg-cream/10 hover:border-cream/50",
  dark: "bg-ink text-cream hover:bg-green",
  paper: "bg-paper text-ink-soft hover:bg-white shadow-sm",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-[15px]",
  lg: "px-8 py-4 text-lg",
};

type ButtonProps = {
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({
  href,
  variant = "brass",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href && href.startsWith("/") && !href.startsWith("//")) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
}
