import React from 'react';
import { Section, Container, Heading } from '../../globalStyle';
import {     
    AboutHead,    
    AboutHeadingSub,
    AboutDesc,
    AboutImgWrapper,
    AboutTextWrapper,   
    AboutSubtitle,
    AboutText,
    AboutTech,
    AboutTechInfo
} from './About.elements';

const TechData = [
    {
        name: 'HTML5',
        img: require('../../images/icons8-html-5-48.png').default
    },
    {
        name: 'CSS3',
        img: require('../../images/icons8-css3-48.png').default
    },
    {
        name: 'Javascript',
        img: require('../../images/icons8-javascript-48.png').default
    },
    {
        name: 'React',
        img: require('../../images/icons8-react-100.png').default
    },
    {
        name: 'Redux',
        img: require('../../images/icons8-redux-48.png').default
    },
    {
        name: 'Node.js',
        img: require('../../images/icons8-nodejs-48.png').default
    },
    {
        name: 'Firebase',
        img: require('../../images/icons8-firebase-48.png').default
    },
    {
        name: 'Jquery',
        img: require('../../images/icons8-jquery-50.png').default
    },
];

const About = () => {
    return (
        <>
        <Section id="ABOUT">
            <Container>
                <AboutHead>
                    <Heading>About</Heading>
                    <AboutHeadingSub>
                    어떤 기술이 아닌 어떤 상품을 만드는지 아는 개발자
                    </AboutHeadingSub>
                </AboutHead>
                <AboutDesc>
                    <AboutImgWrapper>
                        <img src={require('../../images/about.jpg').default} alt="서정린"/>
                    </AboutImgWrapper>
                    <AboutTextWrapper>                        
                        <AboutSubtitle>🤩 Motto</AboutSubtitle>
                        <AboutText>"클라이언트 개발에 필요한 기술이라면 무엇이든지!"</AboutText>
                        <AboutSubtitle>😎 Motivation</AboutSubtitle>
                        <AboutText>우연히 친구의 부탁으로 AutoHotkey 매크로 프로그램을 제작하면서 개발의 즐거움을 알게 되었고 그 후 웹 프론트엔드 개발에 재미를 느껴 꾸준히 공부하면서 웹 어플리케이션 개발을 꿈꿔왔습니다. 웹 개발의 전반적인 이해를 위해 Node.js의 프레임워크 <strong>Express.js</strong>와 <strong>Nest.js</strong>로 백엔드를 공부하고 있으며 프론트엔드는 <strong>Next.js</strong>를 습득 중입니다.</AboutText>
                        <AboutSubtitle>👑 Skills</AboutSubtitle>
                        <AboutTech>
                            {TechData.map((item, i) => {
                                return (
                                    <AboutTechInfo key={i}>
                                        <img src={item.img}/> {item.name}
                                    </AboutTechInfo> 
                                )                         
                            })}                            
                        </AboutTech>
                </AboutTextWrapper>
                </AboutDesc>                   
            </Container>
        </Section>   
        </>
    );
};

export default About;