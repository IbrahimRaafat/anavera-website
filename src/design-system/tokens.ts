export const colors = {
  bg: {
    deep: "#060D18",
    base: "#0B1624",
    card: "#0F1E30",
    cardHover: "#142540",
  },
  brand: {
    teal: "#00A8B5",
    tealLight: "#00C9D4",
    tealDim: "#005F68",
    sky: "#00C2FF",
    navy: "#1B3A6B",
    navyLight: "#254D90",
  },
  border: {
    base: "#1A3352",
    bright: "#264F7A",
  },
  text: {
    base: "#E8F4FF",
    muted: "#6B8FAD",
    subtle: "#3A5A7A",
  },
  semantic: {
    success: "#00E07A",
    warning: "#FFB800",
    danger: "#FF4D6A",
  },
} as const;

export const fontFamily = {
  heading: "var(--font-heading)",
  body: "var(--font-body)",
  mono: "var(--font-mono)",
} as const;

export const spacing = {
  section: "5rem",
  sectionLg: "7.5rem",
  containerPadding: "1.5rem",
} as const;

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;
