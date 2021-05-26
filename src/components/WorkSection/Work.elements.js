import styled from 'styled-components';
import { Heading, Section } from '../../globalStyle';
import { AboutInfoTech } from '../AboutSection/About.elements';

export const WorkWrapper = styled(Section)`
    height: auto;

    @media screen and (max-width: 1300px) {
        padding: 10vh 0 0;
        box-sizing: content-box;
    }
`;

export const WorkTitle = styled(Heading)`
    margin: 30px 0;
    text-align: center;
`;

export const WorkContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    flex-direction: column;
`;

export const Project = styled.div` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 10px;    
    margin: 0 0 200px;

    @media screen and (max-width: 1300px) {
        justify-content: center;
        flex-direction: column;
        padding: 25px;  
    }
`;

export const ProjectTitle = styled.h3`        
    color: #ffab12;    
    font-size: 2em;    

    & > small {
        font-size: 1rem;
    }
`;

export const ProjectImg = styled.img`
    overflow:hidden;
    display: inline-block;
    width: 50%;
    border-radius: 15px;
    box-shadow: 1px 1px 5px #000;

    @media screen and (max-width: 1300px) {
        margin: 0 0 20px;
        width: 100%;
    }    
`;

export const ProjectDesc = styled.div`
    width: 50%;
    padding:  10px 25px;
    @media screen and (max-width: 1300px) {        
        width: 100%;
        padding: 0;
    }
`;

export const ProjectTech = styled.p`
`;

export const ProjectTechInfo = styled(AboutInfoTech)`
`;

export const ProjectDescription = styled.p`    
`;

export const ProjectSubTitle = styled.span`
    display: block;
    color: #ccc;
    margin-right: 15px;
`;

export const ProjectLinks = styled.div`
    padding: 10px 0;
`;

export const ProjectLink = styled.a`
    display: inline-block;
    margin-right: 15px;
    font-size: 2.25em;
    color: #fff;
`;