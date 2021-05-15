import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/Poppins-Regular.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: Poppins-Regular;
    src: url($(font));
  }
  html {
  font-family: 'Poppins-Regular', arial, sans-serif;
  color: var(--taupe);
  }
  h1,h2,h3,h4,h5,h6 {
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
