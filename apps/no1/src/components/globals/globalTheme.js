import { ThemeProvider } from 'styled-components';

export const THEME = {
  colours: {
    blue10: 'hsl(225, 100%, 94%)',
    blue30: 'hsl(245, 75%, 66%)',
    blue50: 'hsl(245, 75%, 52%)',
    neutral10: 'hsl(225, 100%, 98%)',
    neutral50: 'hsl(224, 23%, 55%)',
    neutral100: 'hsl(223, 47%, 23%)',
  },
  font: {
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
      primaryFamily: "'Red Hat Display', sans-serif",
    },
  },
};

export const GlobalTheme = ({ children }) => {
  return <ThemeProvider theme={THEME}>{children}</ThemeProvider>;
};
