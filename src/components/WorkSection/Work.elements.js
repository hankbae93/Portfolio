import styled from 'styled-components';
import { Heading, Section } from '../../globalStyle';
import { AboutTechInfo } from '../AboutSection/About.elements';

export const WorkWrapper = styled(Section)`
    height: auto;
    color: #333;
    background-color: #e0e7ff;
    box-shadow: inset 1px 1px 5px rgb(0,0,0, 0.8);
`;

export const WorkHead = styled(Heading)`
    padding-top: 30px;
    padding-left: 15px;
    margin-bottom: 20px;
    border-bottom: 2px solid #ccc;
`;

export const ProjectWrapper = styled.div``;

export const Project = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${({primary}) => (primary ? 'row' : 'row-reverse')};
    padding-bottom: 100px;

    @media screen and (max-width: 1300px) {
        flex-direction: column;
    }
`;

export const ProjectImg = styled.div.attrs(({ data }) => ({
    style: {
        backgroundImage: data ? `url(${data.url})` : 'none'
    }
}))`    
    flex: 1;
    box-shadow: 1px 1px 5px rgb(0,0,0,0.7);  
    min-width: 40%;
    height: 800px;
    background-size: 100%;  
    background-repeat: no-repeat;    
`;


export const ProjectTextWrapper = styled.div`
    flex: 1;
    padding: ${({ primary }) => (primary ? '0 48px' : '0 48px 0 0')};

    @media screen and (max-width: 1300px) {
        padding: 0;
    }
`;  

export const ProjectTitle = styled.h3`
    margin-bottom: 25px;
    color: #5850eb;
    font-size: 1.5rem;
    line-height: 1;

    & > strong {
        color: #0c1324;
        font-size: 2.25rem;
        font-family: 'Poppins', sans-serif;
    }
`;

export const ProjectTech = styled.ul`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   flex-wrap: wrap;
`;

export const ProjectTechInfo = styled(AboutTechInfo)`
    font-weight: 700;
    text-transform: uppercase ;
    color: #333;
`;

export const ProjectDesc = styled.p`
    margin-bottom: 30px;
    color: #333;
    line-height: 1.5;
    font-weight: 300;    
`;

export const ProjectBtn = styled.button`   
    margin-right: 18px;

    & > svg {
        margin-right: 3px;
    }

    & > a {
        display: block;
        padding: 16px 40px;
        background: ${({primary}) => (primary ? '#5850eb' : '#fff')};
        border-radius: 5px;
        color: ${({primary}) => (primary ? '#fff' : '#5850eb')};
        font-size: 1.125rem;        
        box-shadow: 1px 1px 4px rgb(0,0,0,0.7);
    }
`;

export const IconStyle = {
    marginRight: '3px',
    verticalAlign: 'top'
};