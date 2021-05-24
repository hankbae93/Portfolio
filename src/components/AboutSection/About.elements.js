import styled from 'styled-components';
import { Heading, Section } from '../../globalStyle';

export const AboutWrapper = styled(Section)`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 15px 3.25em;   

    @media screen and (max-width: 1100px) {
        flex-direction: column;
        align-items: center;
    } 
    
`;

export const Head = styled(Heading)`
    
`;

export const AboutImgWrapper = styled.div`
    width: 400px;        
`;

export const AboutImg = styled.img`
    width: 100%;
`;

export const AboutTextWrapper = styled.div`    
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    align-self: center;
    padding-left: 4em;  
    
    @media screen and (max-width: 1100px) {
        padding-left: 0;
    } 
`;

export const AboutTextContainer = styled.div`
    margin: 0 0 30px;
`;

export const AboutText = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;    
    flex-wrap: wrap;
    width: 350px;
`;

export const AboutTitle = styled.h3`
    margin-bottom: 10px;
    color: #ffab12;
    font-size: 1.25em;
    font-family: 'Poppins',sans-serif;
`;

export const AboutInfoTech = styled.span`
    display: inline-block;
    padding: 3px 10px;
    margin: 0 10px 5px 0;
    color: #000;    
    background-color: #fff;
    border-radius: 3px;
    box-sizing: content-box;
`;
