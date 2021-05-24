import React from 'react';
import {
    WorkWrapper,
    WorkTitle,
    WorkContainer,
    Project,
    ProjectSlide,
    ProjectImg,
    ProjectDesc,
 } from './Work.elements';

const Work = () => {
    return (
        <>
        <WorkWrapper>
            <WorkTitle>Work</WorkTitle>
            <WorkContainer>
                <Project>
                    <ProjectSlide>                        
                        <ProjectImg src={require('../../images/netflix-clone03.png').default}  alt="넷플릭스 클론"/>
                        
                    </ProjectSlide>
                    <ProjectDesc>

                    </ProjectDesc>
                </Project>
                <Project>
                    <ProjectImg />
                    <ProjectDesc>
                        
                    </ProjectDesc>
                </Project>
            </WorkContainer>            
        </WorkWrapper>   
        </>
    );
};

export default Work;