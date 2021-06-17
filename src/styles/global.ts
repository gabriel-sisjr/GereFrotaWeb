import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,body,#root{
    max-height: 100vh;
    max-width: 100vw;
    overflow-x:hidden ;

    width: 100%;
    height: 100%;
    overflow: auto;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  *, button, input {
    border:0;
    background: none;
    font-family: Roboto, sans-serif;
  }
  :root{
    --primary: #03438b;
    --secundary: #3769A1;
    --placeholder: #E8E8E8;
    --white: #ffffff;
    --alert: #E63946;
    --confirm: #358F43;
    --atencao: #E3DB0B;
    --hover: #1A5023;
  }
`;
