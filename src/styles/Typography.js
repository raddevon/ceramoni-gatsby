import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/Poppins-Regular.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: Poppins-Regular;
    src: url($(font));
  }
  html {
  font-family: 'Poppins-Regular', arial, sans-serif;
  color: var(--dark-accent);
  }
  h1 {
    font-family: 'Libre Baskerville', Georgia, serif;
    font-size: 34px;
  }
  h2 {
    font-family: 'Adamina', serif;
    font-size: 23px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 400;
    text-shadow: 2px 2px 0px rgb(0 0 0 / 20%);
    line-height: 1.4;
  }
  h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--taupe);
  }
  .center {
    text-align: center;
  }
`;

export default Typography;
