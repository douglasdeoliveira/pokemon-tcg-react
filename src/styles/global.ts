import { createGlobalStyle } from 'styled-components';

import 'flexboxgrid/css/flexboxgrid.min.css';

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  *:focus {
    outline: 0;
  }

  html,
  body {
    height: auto;
  }

  body {
    background: #f3f3f3;
    -webkit-font-smoothing: antialiased !important;
  }

  body,
  input,
  textarea,
  button {
    font: 14px 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  img {
    width: 100%;
  }

  .wrap {
    margin: 0 auto;
    max-width: 1200px;
  }
`;
