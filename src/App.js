import React from 'react';
import { 
  Navbar,
  About,
  Work,
  Contact
} from './components';
import GlobalStyle, { Section, IntroText } from './globalStyle';

function App() {
  return (
    <>
    <GlobalStyle />
    <Navbar />
    <Section>
      <IntroText>
        안녕하세요! 프론트엔드 개발자 서정린입니다.
      </IntroText>
    </Section>
    <About />
    <Work />
    <Contact />
    </>
  );
}

export default App;
