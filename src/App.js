import React from 'react';
import { Navbar } from './components';
import GlobalStyle, { Container } from './globalStyle';

function App() {
  return (
    <>
    <GlobalStyle />
    <Navbar />
    <Container>
      안녕하세요~
    </Container>
    </>
  );
}

export default App;
