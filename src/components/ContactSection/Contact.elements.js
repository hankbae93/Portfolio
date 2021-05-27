import styled from 'styled-components';
import { Heading, Section } from '../../globalStyle';

export const ContactWrapper = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;    
    width: 100%;
    flex-direction: column;
    padding-bottom: 100px;
    height: 100vh;
   
`;

export const ContactHeading = styled(Heading)`    
    text-align: center;
`;

export const ContactUl = styled.ul`        
    display: flex;
    flex-direction: column;
`;
export const ContactLi = styled.li`       
    display: inline-block;
    margin-bottom: 10px;
    color: #000;
    background-color: #fff;
    border-radius: 15px;
    padding: 10px; 

`;