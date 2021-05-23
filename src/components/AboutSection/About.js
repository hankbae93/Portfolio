import React from 'react';
import { 
    AboutWrapper,
    Head,
    AboutImgWrapper,
    AboutImg,
    AboutTextWrapper,
    AboutTextContainer,
    AboutText,
    AboutTitle,
    AboutInfoTech
} from './About.elements';

const About = () => {
    return (
        <>
        <AboutWrapper>
            <AboutImgWrapper>
                <AboutImg src={require('../../images/about.jpg').default}/>
            </AboutImgWrapper>
            <AboutTextWrapper>
                <Head>ABOUT</Head>      
                <AboutTextContainer>
                    <AboutTitle>Motto</AboutTitle> 
                    <AboutText>
                        "클라이언트 개발에 필요한 기술이라면 무엇이든지!"
                    </AboutText>                   
                </AboutTextContainer>                         
                               
               
                
                <AboutTextContainer>
                    <AboutTitle>Skills</AboutTitle>
                    <AboutText>                                    
                        <AboutInfoTech>HTML5</AboutInfoTech>
                        <AboutInfoTech>CSS3</AboutInfoTech>
                        <AboutInfoTech>Javascript</AboutInfoTech>
                        <AboutInfoTech>React</AboutInfoTech>
                        <AboutInfoTech>Node.js</AboutInfoTech>
                        <AboutInfoTech>Express</AboutInfoTech>
                        <AboutInfoTech>Firebase</AboutInfoTech>                    
                    </AboutText>
                </AboutTextContainer>               
            </AboutTextWrapper>
        </AboutWrapper>   
        </>
    );
};

export default About;