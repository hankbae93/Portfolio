import styled from 'styled-components';
import { Heading, Section } from '../../globalStyle';

export const ContactWrapper = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50vh;        
`;

export const ContactHeading = styled(Heading)`

`;

export const ContactUl = styled.ul`    
    padding: 0 0 0 15px;
`;
export const ContactLi = styled.li`
    padding: 10px;
    margin-bottom: 10px;
    color: #000;
    background-color: #fff;
    border-radius: 15px;
`;