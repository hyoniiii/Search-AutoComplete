import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  body {
  font-family: 'Noto Sans KR', sans-serif;
  box-sizing: border-box;
  }
`;

export default GlobalStyles;
