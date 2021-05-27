import styled from 'styled-components';
import { Container } from '../../globalStyle';

export const NavContainer = styled.div`
    position: fixed;
    left:0;
    top:30px;       
    width: 100%;

`;

export const NavWrap = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;    
`;

export const NavHeading = styled.h1`    
    width: 280px;    
    line-height: 0;
    z-index: 1;

    @media screen and (max-width: 1100px) {
        width: 250px;
    }
    @media screen and (max-width: 840px) {
        width: 220px;
    }
`;

export const NavLogo = styled.img`    
    width: 100%;    
`;

export const NavMenuBtn = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    flex-direction: column;    
    width: 44px;
    height: 32px;
    padding-left: 40px;
    z-index: 1;
    box-sizing: initial;
    cursor: pointer;

    & > span {
        background-color: ${({menu}) => menu ? '#fff' : '#2b2b2b'};
    }
    
    & > span:nth-child(1) {
        width: ${({menu}) => menu ? '86%' : '100%'};
        transform-origin: 12%;
        transform: ${({menu}) => menu ? 'rotate(0)' : 'rotate(45deg)'};
    }

    & > span:nth-child(2) {        
        width: ${({menu}) => menu ? '100%' : '0%'};
        align-self: center;
        transform-origin: right;
        transform: ${({menu}) => menu ? 'rotate(0)' : 'rotate(45deg)'};
    }

    & > span:nth-child(3) {
        width: ${({menu}) => menu ? '70%' : '100%'};        
        transform-origin: 17%;
        transform: ${({menu}) => menu ? 'rotate(0)' : 'rotate(-45deg)'};
    }

    &:hover > span:nth-child(1),
    &:hover > span:nth-child(3) {
        width: 100%;
    }    

    &:hover > span:nth-child(2) {
        width: ${({menu}) => menu ? '70%' : '0%'}
    }

    @media screen and (max-width: 1100px) {
        height: 28px;

        & > span:nth-child(1) {
            transform-origin: 20%;
        }
    }
`;

export const NavMenuBtnBar = styled.span`
    display: inline-block;    
    height: 5px;
    background-color: #fff;    
    transition: all 0.3s ease;

    @media screen and (max-width: 1100px) {
        height: 4px;
    }
`;

export const NavMenuBackground = styled.div`
    overflow: hidden;
    position: fixed;
    left:0;
    top:0;
    width:100%;
    height: ${({menu}) => menu ? '0vh' : '100vh'};
    transition: all 0.3s ease;
    background-color: #fbad21;
`;

export const NavMenu = styled.ul`
    width: 100%;
    height: 100vh;
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column;       
    color: #2b2b2b;    
`;

export const NavItem = styled.li`
    padding: 15px 0;
`;

export const NavLink = styled.span`
    font-size: 5em;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        color: #fff;
    }

    @media screen and (max-width: 1100px) {
        font-size: 4em;
    }
    @media screen and (max-width: 960px) {
        font-size: 3em;
    }
`;