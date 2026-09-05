import type { CSSProperties } from "react";
export function Icon({
  name = "arrow",
  size = 24,
  style,
}: {
  name?: string;
  size?: number;
  style?: CSSProperties;
}) {
  const paths: Record<string, React.ReactNode> = {
    arrow: (
      <>
        <path d="M4 12h15M13 5l7 7-7 7" />
      </>
    ),
    house: (
      <>
        <path d="m3 10 9-7 9 7v11h-7v-7h-4v7H3Z" />
      </>
    ),
    factory: (
      <>
        <path d="M3 21V10l6 3V8l6 4V3h4l2 18ZM7 17v1m5-1v1m5-1v1" />
      </>
    ),
    window: (
      <>
        <path d="M4 3h16v18H4zM12 3v18M4 12h16" />
      </>
    ),
    pin: (
      <>
        <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
    shield: (
      <>
        <path d="m12 2 8 3v6c0 5-8 11-8 11S4 16 4 11V5ZM8 11l3 3 5-6" />
      </>
    ),
    ruler: (
      <>
        <path d="M5 3h14v18H5ZM5 7h5m-5 5h7m-7 5h5" />
      </>
    ),
    chat: (
      <>
        <path d="M3 4h18v13H9l-6 4ZM7 9h10m-10 4h6" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 1v3m0 16v3M1 12h3m16 0h3M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2" />
      </>
    ),
    gift: (
      <>
        <path d="M3 8h18v4H3zM5 12v9h14v-9M12 8v13" />
        <path d="M12 8C3 8 5 0 9 3l3 5c9 0 7-8 3-5Z" />
      </>
    ),
    plus: <path d="M5 12h14M12 5v14" />,
    close: <path d="m5 5 14 14M5 19 19 5" />,
    check: <path d="m4 12 5 5L20 6" />,
    menu: <path d="M3 6h18M3 12h18M3 18h18" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    pause: <path d="M8 5v14M16 5v14" />,
    play: <path d="m8 4 12 8-12 8Z" />,
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={style}
    >
      {paths[name] || paths.arrow}
    </svg>
  );
}
