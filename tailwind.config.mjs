import tailwindcssForm from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-tertiary-fixed": "#2b1703",
        "tertiary-fixed": "#ffdcbd",
        "on-secondary-container": "#561c00",
        surface: "#131315",
        "inverse-on-surface": "#303032",
        "surface-container-highest": "#353436",
        "on-surface-variant": "#c6c6cd",
        "surface-bright": "#39393b",
        "surface-container-high": "#2a2a2b",
        "on-tertiary-fixed-variant": "#5b4227",
        "inverse-primary": "#555e76",
        background: "#131315",
        "outline-variant": "#45464d",
        "surface-tint": "#bdc6e1",
        "error-container": "#93000a",
        "tertiary-fixed-dim": "#e5c09d",
        "tertiary-container": "#221000",
        "on-error": "#690005",
        "on-tertiary": "#422c13",
        tertiary: "#e5c09d",
        "surface-container": "#1f1f21",
        "secondary-fixed-dim": "#ffb597",
        "primary-fixed-dim": "#bdc6e1",
        "surface-variant": "#353436",
        "inverse-surface": "#e4e2e4",
        "surface-container-low": "#1b1b1d",
        secondary: "#ff6200",
        "on-surface": "#e4e2e4",
        "on-primary-fixed-variant": "#3d475d",
        "on-background": "#e4e2e4",
        "on-tertiary-container": "#98795a",
        "surface-dim": "#131315",
        "secondary-container": "#ff6409",
        "secondary-fixed": "#ffdbcd",
        "primary-container": "#0a1428",
        "on-error-container": "#ffdad6",
        "primary-fixed": "#d9e2fe",
        "on-secondary-fixed-variant": "#7e2c00",
        "on-primary": "#273045",
        "surface-container-lowest": "#0e0e10",
        "on-primary-container": "#757f97",
        error: "#ffb4ab",
        "on-primary-fixed": "#121b2f",
        "on-secondary": "#591d00",
        outline: "#8f9097",
        "on-secondary-fixed": "#360f00",
        primary: "#bdc6e1",
        "brand-cyan": "#00F0FF",
        "brand-emerald": "#10B981",
        "brand-magenta": "#FF00FF",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      spacing: {
        gutter: "2rem",
        "stack-lg": "3rem",
        "container-max": "1280px",
        "stack-sm": "0.5rem",
        "section-py": "6rem",
        "stack-md": "1.5rem",
      },
      fontFamily: {
        "display-xl": ["Inter"],
        "headline-lg": ["Inter"],
        "label-sm": ["Inter"],
        "quote-accent": ["Playfair Display"],
        "headline-lg-mobile": ["Inter"],
        "body-md": ["Inter"],
        "body-lg": ["Inter"],
      },
      fontSize: {
        "display-xl": [
          "44px",
          {
            lineHeight: "1.08",
            letterSpacing: "0",
            fontWeight: "900",
          },
        ],
        "display-xl-desktop": [
          "76px",
          {
            lineHeight: "1.08",
            letterSpacing: "0",
            fontWeight: "900",
          },
        ],
        "headline-lg": [
          "34px",
          {
            lineHeight: "1.2",
            letterSpacing: "0",
            fontWeight: "800",
          },
        ],
        "headline-lg-desktop": [
          "48px",
          {
            lineHeight: "1.2",
            letterSpacing: "0",
            fontWeight: "800",
          },
        ],
        "label-sm": [
          "12px",
          {
            lineHeight: "1.0",
            letterSpacing: "0.1em",
            fontWeight: "600",
          },
        ],
        "quote-accent": [
          "24px",
          {
            lineHeight: "1.4",
            fontWeight: "400",
          },
        ],
        "quote-accent-desktop": [
          "32px",
          {
            lineHeight: "1.4",
            fontWeight: "400",
          },
        ],
        "body-md": [
          "16px",
          {
            lineHeight: "1.6",
            fontWeight: "400",
          },
        ],
        "body-lg": [
          "18px",
          {
            lineHeight: "1.6",
            fontWeight: "400",
          },
        ],
      },
      maxWidth: {
        "container-max": "1280px",
      },
    },
  },
  plugins: [tailwindcssForm],
};

export default config;
