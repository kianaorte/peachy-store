export const colors = {
  primary: "#F58B76",
  primaryLight: "#FFC6B8",
  primaryDark: "#D96D59",

  background: "#FFF8F5",
  surface: "#FFFFFF",
  surfaceAlt: "#FBE5D9",

  text: "#633A35",
  textSecondary: "#8F7772",
  textInverse: "#FFFFFF",

  border: "#EEDBD5",

  success: "#4D8B70",
  error: "#C94F55",
  disabled: "#D9CCC8",
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
} as const;

export const typography = {
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
    xxl: 32,
  },

  fontWeight: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },

  lineHeight: {
    sm: 18,
    md: 24,
    lg: 28,
    xl: 32,
    xxl: 40,
  },
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
} as const;

export const iconSize = 24;
