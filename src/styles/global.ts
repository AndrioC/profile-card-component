import { createGlobalStyle } from 'styled-components'
import topBackground from '../assets/bg-pattern-top.svg'
import bottomBackground from '../assets/bg-pattern-bottom.svg'

export const GlobalStyle = createGlobalStyle`

    :root {
        --background: #19A1AE;
        --red: #E52E4d;
        --green: #33CC95;
        --blue: #5429CC;
        --blue-light: #6933FF;
        --text-title: #363F5F;
        --text-body: #969CB3;
        --shape: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
        background-image: url(${topBackground}), url(${bottomBackground});
        background-repeat: no-repeat;
        background-position: bottom -50vh right 50vw, top 50vh left 50vw;
    }

    body, input, textarea, button {
        font-family: 'Kumbh Sans', sans-serif;
        font-weight: 400;    
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }
`;