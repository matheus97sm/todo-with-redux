import { createGlobalStyle } from 'styled-components';

import { theme } from 'utils/theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  ul, ol, li {
    list-style: none;
  }

  a {
    color: ${theme.colors.text_color.main};
    text-decoration: none;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
