import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    ${({ theme }) => css`
      html {
        box-sizing: border-box;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      :root {
        --bright-orange: ${theme.colors.brightORange};
        --dark-cyan: ${theme.colors.darkCyan};
        --very-dark-cyan: ${theme.colors.veryDarkCYan};
        --transparent-white: ${theme.colors.transparentWhite};
        --very-light-gray: ${theme.colors.veryLightGray};

        --type-scale-ratio: ${theme.typography.typeScale.ratio};
        --text-2xs: ${theme.typography.size.xxs};
        --text-xs: ${theme.typography.size.xs};
        --text-sm: ${theme.typography.size.sm};
        --text-base: ${theme.typography.size.base};
        --text-md: ${theme.typography.size.md};
        --text-lg: ${theme.typography.size.lg};
        --text-xl: ${theme.typography.size.xl};
        --text-2xl: ${theme.typography.size.xxl};
        --text-3xl: ${theme.typography.size.xxxl};
      }

      body {
        height: 100vh;
        margin: 0;
        padding: 0;

        font-family: ${theme.typography.fontFamily.primary};
        font-size: ${theme.typography.typeScale.baseSize};
        color: var(--very-light-gray);
      }
    `}
`;
