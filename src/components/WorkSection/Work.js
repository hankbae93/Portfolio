import React from 'react';
import {
    WorkWrapper,
    WorkTitle,
    WorkContainer,
    Project,
    ProjectImg,
    ProjectTitle,
    ProjectDesc,
    ProjectDescription,
    ProjectSubTitle,
    ProjectTech,
    ProjectTechInfo,
    ProjectLinks,
    ProjectLink
} from './Work.elements';
import { FaGithub, FaChrome } from "react-icons/fa";


const Work = () => {
    return (
        <>
        <WorkWrapper>
            <WorkTitle>Work</WorkTitle>
            <WorkContainer>
                <Project>                                     
                    <ProjectImg src={require('../../images/netflix-clone03.png').default}/>
                    <ProjectDesc>
                        <ProjectTitle>RAFLIX <small>(Netflix Clone Project)</small></ProjectTitle>
                        <ProjectTech>
                            <ProjectTechInfo>React</ProjectTechInfo>
                            <ProjectTechInfo>Context API</ProjectTechInfo>
                            <ProjectTechInfo>axios</ProjectTechInfo>
                            <ProjectTechInfo>Firebase</ProjectTechInfo>
                            <ProjectTechInfo>React-Slick</ProjectTechInfo>
                        </ProjectTech>
                        <ProjectDescription>
                            <ProjectSubTitle>DESCRIPTION</ProjectSubTitle>
                            홈 페이지, 로그인 페이지, 회원가입 페이지, 스트리밍 페이지 총 네 개의 구성으로 이뤄져있으며 Firebase를 활용하여 회원가입, 로그인, 사용자 관련 영화 정보를 저장할 DB를 구현하였습니다. 로그인을 성공하면 영화 정보 API를 axios로 가져와 사용자에게 뷰를 제공하고 영화 콘텐츠마다 좋아요, 싫어요, 내가 찜한 콘텐츠들을 DB에서 클라이언트로 가져와 실시간으로 적용되게 구현하였습니다. 마지막으로 영화 콘텐츠 재생 버튼을 누를 시 나오는 플레이어까지 구현하였습니다. 영화 콘텐츠 관련 상태 관리는 Context API를 사용하였습니다.
                        </ProjectDescription>
                        <ProjectLinks>
                            <ProjectLink target="_blank" href="https://github.com/ranjafunc/netflix_clone" alt="깃허브"><FaGithub /></ProjectLink>
                            <ProjectLink target="_blank" href="https://ranjafunc.github.io/netflix_clone/" alt="사이트"><FaChrome /></ProjectLink>
                        </ProjectLinks>
                    </ProjectDesc>                   
                </Project>

                <Project>
                    <ProjectImg src={require('../../images/loa-status-app.jpg').default}/>
                    <ProjectDesc>
                        <ProjectTitle>LOAYA <small>(로스트아크 전적 정보 검색 웹 앱)</small></ProjectTitle>
                        <ProjectTech>
                            <ProjectTechInfo>React</ProjectTechInfo>
                            <ProjectTechInfo>Context API</ProjectTechInfo>
                            <ProjectTechInfo>axios</ProjectTechInfo>
                            <ProjectTechInfo>Node.js</ProjectTechInfo>
                            <ProjectTechInfo>Express.js</ProjectTechInfo>
                            <ProjectTechInfo>cheerio</ProjectTechInfo>
                            <ProjectTechInfo>heroku</ProjectTechInfo>
                        </ProjectTech>
                        <ProjectDescription>
                            <ProjectSubTitle>DESCRIPTION</ProjectSubTitle>
                            로스트아크 게임 공식 오픈 API가 없는 관계로 로스트아크 공식사이트의 전적정보실에서 클라이언트의 사용자가 입력하는 아이디의 정보를 웹 크롤링(cheerio 라이브러리를 적극 활용)으로 서버에 가져와 가공한 API를 다시 클라이언트에 제공하는 방식으로 구현하였습니다. proxy, cors 정책 문제 등에 부딪히면서 더욱 넓은 시야를 가지게 된 프로젝트였습니다.
                        </ProjectDescription>
                        <ProjectLinks>
                            <ProjectLink target="_blank" href="https://github.com/ranjafunc/loa-status-app" alt="깃허브"><FaGithub /></ProjectLink>
                            <ProjectLink target="_blank" href="https://loa-status-app.herokuapp.com/" alt="사이트"><FaChrome /></ProjectLink>
                        </ProjectLinks>
                    </ProjectDesc>
                </Project>
            </WorkContainer>            
        </WorkWrapper>   
        </>
    );
};

export default Work;
                    