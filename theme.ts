function customMediaQuery(maxWidth: number) {
  return `@media (min-width: ${maxWidth}px)`;
}

const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(1440),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(375),
};

const theme = {
  primary: {
    main: "#E7816B",
    dark: "#1D1C1E",
    light: "#FFFFFF",
  },
  secondary: {
    main: "#FFAD9B",
    dark: "#333136",
    light: "#F1F3F5",
  },
  breakpoints: {
    ...media,
  },
};

export default theme;
