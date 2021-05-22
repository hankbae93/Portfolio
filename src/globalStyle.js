import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 16px;
        color: #fff;
        background-color: #2b2b2b;
        
        font-family: 'Noto Sans KR', sans-serif;
    }

    ul {
        list-style: none;
    }

    button, a {
        cursor: pointer;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 400vh;
    padding: 1.5rem 5rem;
    z-index: 1; 
`;

export default GlobalStyle;