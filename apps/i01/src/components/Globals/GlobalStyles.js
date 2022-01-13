import { createGlobalStyle } from 'styled-components';
import { TOKENS } from './GlobalTokens.js';

const GlobalReset = `
    *, *::before, *:: after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
    }

    html, body {
        height: 100%;
    }

    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }
      
    input, button, textarea, select {
        font: inherit;
    }

    ul, ol , li {
        list-style-type: none;
    }

    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }
    
    #root, #__next {
        isolation: isolate;
    }
`;

const GlobalCSSProperties = `
    :root  {
        --font-family-primary: ${TOKENS.typography.fontFamily};
        --type-scale-ratio: ${TOKENS.typography.typeScale.desktop};
        --font-base-size: 100%;
        --font-size-2xs: calc(((1rem / var(--type-scale-ratio)) / var(--type-scale-ratio))/ var(--type-scale-ratio));
        --font-size-xs: calc((1rem / var(--type-scale-ratio)) / var(--type-scale-ratio));
        --font-size-sm: calc(1rem / var(--type-scale-ratio));
        --font-size-base: 1rem;
        --font-size-md: calc(1rem * var(--type-scale-ratio));
        --font-size-lg: calc(var(--font-size-md) * var(--type-scale-ratio));
        --font-size-xl: calc(var(--font-size-lg) * var(--type-scale-ratio));
        --font-size-2xl: calc(var(--font-size-xl) * var(--type-scale-ratio));
        --font-size-3xl: calc(var(--font-size-2xl) * var(--type-scale-ratio));

        --checkbox-color-border-default: ${TOKENS.colors.darkTheme.gray_30};
        --checkbox-color-border-hover: ${TOKENS.colors.darkTheme.secondary};
        --checkbox-color-bg-active: ${TOKENS.colors.darkTheme.gradient};

        --surface-color: ${TOKENS.colors.darkTheme.black_10};
        --text-color: ${TOKENS.colors.darkTheme.neutral_white};
        --bg-color: ${TOKENS.colors.darkTheme.neutral_black};
    }

    [data-theme="light"] {
        --text-color: ${TOKENS.colors.lightTheme.neutral_black};
        --bg-color: ${TOKENS.colors.lightTheme.neutral_white};
    }

`;

const GlobalClasses = `
    .visually-hidden {
        position: absolute !important;
        clip: rect(1px, 1px, 1px, 1px) !important;
        padding:0 !important;
        border:0 !important;
        height: 1px !important;
        width: 1px !important;
        overflow: hidden !important;
    }
`;

export const GlobalStyles = createGlobalStyle`
      ${GlobalReset}
      ${GlobalCSSProperties}
      ${GlobalClasses}

      h1 { font-size: var(--font-size-3xl); }
      h2 { font-size: var(--font-size-2xl); }
      h3 { font-size: var(--font-size-xl); }
      h4 { font-size: var(--font-size-lg); }
      h5 { font-size: var(--font-size-md); }
      h6 { font-size: var(--font-size-sm); }
  
      body {
          background-color: var(--bg-color);
          color: var(--text-color);
          font-family: var(--font-family-primary) !important;
          font-size: var(--font-base-size);
      }
    `;
