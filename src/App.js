import React from 'react';
import { Navbar } from './components';
import GlobalStyle, { Container, IntroText } from './globalStyle';

function App() {
  return (
    <>
    <GlobalStyle />
    <Navbar />
    <Container>
      <IntroText>
        안녕하세요! 프론트엔드 개발자 서정린입니다.
      </IntroText>
    </Container>
    </>
  );
}

export default App;
