import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 0.2rem ${(props) => props.theme['base-border']};
    }

    body{
        background-color: ${(props) => props.theme['base-background']};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
        max-width: 1440px;
        margin: auto;
    }

    body, input, textarea, button{
        font: 400 1rem 'Nunito', sans-serif;
    }
`
