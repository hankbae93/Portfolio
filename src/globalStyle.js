import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
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

export const Section = styled.section`
    width: 100%;    
    height: 100vh;
    padding: 0 3.25rem;
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

export const Heading = styled.h2`
    margin-bottom: 15px;
    font-size: 3rem;
    color: #ffab12;
    text-shadow: 1px 1px 5px #000;
    font-family: 'Poppins',sans-serif;
`;

export default GlobalStyle;