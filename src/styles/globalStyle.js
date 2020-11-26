import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;

}

html, border-style, #root, .App {
    height: 100%
}

.App {
    height: 100vh;
}

body {
    font: 14px 'Roboto', sans-serif;
    background: #000000;
    color: #FFFFFF;
    -webkit-font-smoothing: antialiased !important;
}
`


