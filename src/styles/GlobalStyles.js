import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }

    body {
        background: #111;
        color: #fff;
        font-family: 'Roboto', sans-serif;
    }
`;