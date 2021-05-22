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

    @media screen and (max-width: 1100px) {
        body {
            font-size: 15px;
        }
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 400vh;
    padding: 1.5rem 5rem;
    z-index: 1; 
`;

export const IntroText = styled.h1`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 100vh;
    padding: 0 0 15vh;
    font-size: 2.24rem;    
`;

export default GlobalStyle;