import React from 'react';
import {
    WorkWrapper,
    WorkTitle,
    WorkContainer,
    Project,
    ProjectImg,
    ProjectTitle,
    ProjectDesc,
    ProjectTech,
    ProjectTechInfo
 } from './Work.elements';

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
                            <ProjectTechInfo>Firebase</ProjectTechInfo>
                            <ProjectTechInfo>React-Slick</ProjectTechInfo>
                        </ProjectTech>
                        <p>
                            <span>DESCRIPTION</span>
                        </p>
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
                    