import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
        box-sizing: border-box;
        /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
        font-family: 'Raleway', sans-serif;
}
*, *::before, *::after {
        box-sizing: inherit;
}
ul, li, h1, h2, h3, p, button {
        margin: 0;
        color: #E7E7EB;
        font-weight:500;
;
}
ul {
        list-style: none;
        padding: 0;
}
button {
        background: transparent;
        border: 0;
        outline: 0;
}
body {
        min-height: 100vh;
        margin: 0 auto;
        overscroll-behavior: none;
        width: 100%;
        background-color:#100E1D;
  & #app{
    background-color:#100E1D;

    
  }

  @media (min-width: 1269px) {
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#2f2c43;

    & #app{
      border-radius: 10px;
      overflow: hidden;
    }
  }
}
`;

export const ContainerHome = styled.section`
  @media (min-width: 1269px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    max-width: 1440px;
    max-height: 800px;
    margin: 0 auto;
    position: relative;
  }
`;
