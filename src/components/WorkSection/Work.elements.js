import styled from 'styled-components';
import { Heading, Section } from '../../globalStyle';

export const WorkWrapper = styled(Section)`

`;

export const WorkTitle = styled(Heading)`
    text-align: center;
`;

export const WorkContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
`;

export const Project = styled.div`
    flex: 1;
    width: 50%;
    padding: 25px 10px;
`;

export const ProjectSlide = styled.div`
    overflow: hidden;
    width: 100%;
`;

export const ProjectImg = styled.img`
    width: 100%;
`;

export const ProjectDesc = styled.div`

`;
