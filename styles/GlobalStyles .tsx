import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  button {
    background-color: black;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #333; /* Slightly lighter on hover */
    }

    &:focus {
      outline: none;
    }

    &:disabled {
      background-color: grey;
      cursor: not-allowed;
    }
  }
`;

export default GlobalStyles;
