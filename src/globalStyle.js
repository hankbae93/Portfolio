import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'SCDream';
    font-style: normal;
    font-weight: normal;
    src: url("./font/SCDream4.otf") format('truetype')
    }

    @font-face {
    font-family: 'SCDream';
    font-style: normal;
    font-weight: 700;
    src: url("./font/SCDream7.otf") format('truetype')
    }   
    
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
        font-family: 'SCDream', sans-serif;
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;    
    height: 100vh; 
    

    @media screen and (max-width: 1300px) {
        height: auto;
        box-sizing: content-box;
    }
`;

export const IntroText = styled.h1`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 90vh;
    padding: 0 0 15vh;
    font-size: 2.24rem;    
`;

export const Heading = styled.h2`    
    font-size: 2.625em;
    color: #ffab12;
    text-shadow: 1px 1px 5px #000;
    font-family: 'Poppins',sans-serif;
`;

export const Container = styled.div`
    margin: 0 auto;
    padding: 0 35px;
    width: 1360px;
    height: auto; 

    @media screen and (max-width: 1400px) {
        width: 100%;
    }
`;

export default GlobalStyle;