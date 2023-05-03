import { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline: none;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS_DARK.dark_400};
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
    text-decoration: none;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  .Toastify__toast{
    font-size: 1.8rem;
    color: black;
  }
`