import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

    :root{
        --red: #FF7979;
        --green: #38CC8B;
        --violet: #5E54A4;
        --black: #3D3B48;
    }

    *,
    *::after,
    *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins';
    }
    body{
        background-image: url('assets/mobile.png');
        background-color: var(--red)
    }

    h1 {
    font-weight: 700;
    }

    h2 {
    font-weight: 600;
    }

    h3 {
    font-weight: 500;
    }
    
`
