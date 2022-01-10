import { ThemeProvider } from 'styled-components';

export const THEME = {
  colors: {
    brightOrange: 'hsla(31, 77%, 52%, 1)',
    darkCyan: 'hsla(184, 100%, 22%, 1)',
    veryDarkCyan: 'hsla(179, 100%, 13%, 1)',
    transparentWhite: 'hsla(0, 0%, 100%, 0.75)',
    veryLightGray: 'hsla(0, 0%, 95%, 1)',
    white: 'hsla(0, 0%, 100%, 1)',
  },
  typography: {
    typeScale: {
      baseSize: '100%',
      ratio: '1.200',
    },
    size: {
      xxs: 'calc(((1rem / var(--type-scale-ratio)) / var(--type-scale-ratio))/ var(--type-scale-ratio))',
      xs: 'calc((1rem / var(--type-scale-ratio)) / var(--type-scale-ratio))',
      sm: 'calc(1rem / var(--type-scale-ratio))',
      base: '1rem',
      md: 'calc(1rem * var(--type-scale-ratio))',
      lg: 'calc(var(--text-md) * var(--type-scale-ratio))',
      xl: 'calc(var(--text-lg) * var(--type-scale-ratio))',
      xxl: 'calc(var(--text-xl) * var(--type-scale-ratio))',
      xxxl: 'calc(var(--text-2xl) * var(--type-scale-ratio))',
    },
    fontFamily: {
      primary: "'Lexend Deca', sans-serif",
      secondary: "'Big Shoulders Display', cursive",
    },
  },
};

export const GlobalTheme = ({ children }) => {
  return <ThemeProvider theme={THEME}>{children}</ThemeProvider>;
};
