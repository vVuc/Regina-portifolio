import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    font-size: 16px;
}

@media (max-width: 1280px) and (min-width: 768px) {
    html {
    font-size: 10px;
  }
}
@media (max-width: 1366px) and (min-width: 1281px) {
    html {
    font-size: 12px;
  }
}

:root{
}
`

