import { createGlobalStyle, css } from 'styled-components';
// import BackgroundImage from '../../assets/pattern-background-desktop';

export const GlobalStyle = createGlobalStyle`
    ${({ theme }) => css`
      html {
        box-sizing: border-box;
      }

      :root {
        --primary-blue-10: ${theme.blue10};
        --primary-blue-50: ${theme.blue50};

        // Typography

        --type-scale-ratio: 1.1;
        --text-2xs: ${theme.font.size.xxs};
        --text-xs: ${theme.font.size.xs};
        --text-sm: ${theme.font.size.sm};
        --text-base: ${theme.font.size.base};
        --text-md: ${theme.font.size.md};
        --text-lg: ${theme.font.size.lg};
        --text-xl: ${theme.font.size.xl};
        --text-2xl: ${theme.font.size.xxl};
        --text-3xl: ${theme.font.size.xxxl};
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      #root {
        height: 100%;
      }

      body {
        height: 100vh;
        max-width: 100vw;
        overflow: hidden;
        touch-action: none;
        margin: 0;

        padding: 0;
        text-rendering: optimizeLegibility;
        font-family: ${theme.font.fontFamily.primaryFamily};
        font-size: 1rem;
        font-weight: 400;
        color: ${theme.colours.neutral50};

        overscroll-behavior: none;
        background-color: ${theme.colours.blue10};
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: ${theme.colours.neutral100};
        margin: 0;
      }

      p {
        margin: 0;
      }

      h1 {
        font-size: var(--text-3xl);
      }

      h3 {
        font-size: var(--text-md);
      }

      button {
        font-size: var(--text-sm);
      }
    `}
    `;
