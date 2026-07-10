/** World of Flavors emblem — a brass globe mark. Pure SVG, no image asset. */
export function Emblem({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 44"
      className={className}
      role="img"
      aria-label="World of Flavors emblem"
    >
      <circle cx="22" cy="22" r="21" fill="#0f2418" stroke="#cba15a" strokeWidth="1.5" />
      {/* globe outline */}
      <circle cx="22" cy="22" r="13.5" fill="none" stroke="#cba15a" strokeWidth="1.4" />
      {/* equator + tropics */}
      <path
        d="M8.7 22 h26.6 M10.2 16.4 h23.6 M10.2 27.6 h23.6"
        stroke="#cba15a"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* meridians */}
      <ellipse cx="22" cy="22" rx="6.4" ry="13.5" fill="none" stroke="#cba15a" strokeWidth="1" opacity="0.85" />
      <path d="M22 8.5 V35.5" stroke="#cba15a" strokeWidth="1" opacity="0.85" />
      {/* accent dot */}
      <circle cx="22" cy="22" r="2.1" fill="#2c6e3a" stroke="#e7cf9e" strokeWidth="0.9" />
    </svg>
  );
}
