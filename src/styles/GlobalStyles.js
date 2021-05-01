import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --ivory: #e7e9ea;
    --light-accent: #3e6259;
    --main-brand: #083a45;
    --dark-accent: #0b2326;
    --dark-shades: #2a3233;
    --taupe: #ad8c8c;
    --black: #2e2e2e;
  }
  html {
    font-size: 10px;
  }
  body {
    font-size: 2rem;
    color: var(--black);
  }
  a {
    text-decoration: none;
    color: --dark-shades;

  }
`;

export default GlobalStyles;
