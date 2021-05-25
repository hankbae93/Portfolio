import styled from 'styled-components';
import { Heading, Section } from '../../globalStyle';
import { AboutInfoTech } from '../AboutSection/About.elements';

export const WorkWrapper = styled(Section)`

`;

export const WorkTitle = styled(Heading)`
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
    width: 50%;
    border-radius: 15px;
    box-shadow: 1px 1px 5px #000;
`;

export const ProjectDesc = styled.div`
    width: 50%;
    padding:  10px 25px;
`;

export const ProjectTech = styled.p`

`;

export const ProjectTechInfo = styled(AboutInfoTech)`
`;