import styled , {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        list-style-type: none;
        text-decoration: none;
        box-sizing: border-box;
    }

    :root{
        --primary-color: blue;
    }

    body {
        background-color: ${props => props.light ? "#111" : "#f5f5f5"};
        text-align: center;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
`

export default GlobalStyles;