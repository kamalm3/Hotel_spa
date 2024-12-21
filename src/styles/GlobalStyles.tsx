import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Courier New', Monospace;
    background-color: #21201e;
    color: #333;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Courier New', Monospace;
    font-weight: bold;
    text-align: center
  }

  p1 {
    font-size: 70px;
    color: #777;
    text-align: center;
    display: inline-block; 
    font-weight: bold;
  }

  a {
    color: #3498db;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  ul, ol {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
    list-style-type: none;
    padding: 0;
  }

  li {
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 8px;
  }
`;
