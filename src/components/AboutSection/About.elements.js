import styled from 'styled-components';
import AboutBackground from '../../images/about-background.jpg';

export const AboutHead = styled.div`
    padding: 30px 15px;
    background: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.7)), url(${AboutBackground}) no-repeat center;    
    background-size: 100%;
    border-radius: 15px;
`;

export const AboutHeadingSub = styled.p`    
    color: #727178;
    font-weight: 700;
`;

export const AboutDesc = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding: 15px 0;
    height: auto;

    @media screen and (max-width: 1300px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const AboutImgWrapper = styled.div`
    flex: 1;    
    overflow: hidden;
    border-radius: 15px;
    line-height: 0;
    
    & > img {
        width: 100%;             
    }

    @media screen and (max-width: 1300px) {
        text-align: center;
        & > img {
            width: 50%;             
        }
    }
`;

export const AboutTextWrapper = styled.div`
    flex: 3;
    padding-left: 25px;

    @media screen and (max-width: 1300px) {        
        padding: 25px 0;
    }
`;
export const AboutSubtitle = styled.h4`
    color: #afb9c8;
    font-size: 1.125em;
    font-family: 'Poppins',sans-serif;
`;
export const AboutText = styled.p`
    font-size: 1.0625em;
    margin-bottom: 15px;

    & > strong {
        color: #ffab12;
    }
`;
export const AboutTech = styled.ul``;
export const AboutTechInfo = styled.li`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 3px 20px;
    margin-right: 6px;    
    margin-bottom: 10px;
    font-size: 0.875em;
    font-weight: 700;
    line-height: 24px;
    border-radius: 5px;
    background: rgb(246, 249, 252);
    color: #333;
    box-sizing: content-box;

    & > img {
        width: 20px;
        margin-right: 2px;        
    }
`;