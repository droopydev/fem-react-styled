import { createGlobalStyle } from 'styled-components';
import { colors } from './globalTokens';

export const GlobalStyle = createGlobalStyle`

    html {
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
      }

    body {
        height: 100vh;
        max-width: 100vw;
        overflow: hidden;
        touch-action: none;
        margin: 0;  
    
        padding: 0;
        text-rendering: optimizeLegibility;
        font-family: Galano;
        font-weight: 400;
    
        overscroll-behavior: none;
        background-color: ${colors.primary_Blue_10};
    }

    #root {
        height: 100%;
    }

`;
