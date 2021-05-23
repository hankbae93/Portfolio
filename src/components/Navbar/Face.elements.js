import styled, { keyframes } from 'styled-components';

export const FaceContainer = styled.div.attrs(({ currentScroll, menu }) => ({
    style: {
        transform: menu ? `translateX(-50%) scale(${currentScroll.scale})` : 'translateX(-50%) scale(0.1)',
        top: menu ? `${currentScroll.top}px` : '42px',        
    }
}))`
    position: absolute;
    top: 30vh;    
    left: 50%;
    z-index: 10;
    font-size: 16px;
    width: 22.5em;
    height: 22.5em;
    transform-origin: top;
    transform: translateX(-50%);
    transition: all 0.2s ease;

    & div {
        background-color: ${({menu}) => (menu ? '#fff' : '#2b2b2b')};
    }

    @media screen and (max-width: 1100px) {
        font-size: 15px;
    }

    @media screen and (max-width: 960px) {
        font-size: 14px;
    }

    @media screen and (max-width: 840px) {
        font-size: 13px;
    }
`;

export const Eyes = styled.div.attrs(({ currentMouse }) => ({
    style: {
      transform: currentMouse 
      ? `translateX(${currentMouse.x}px) translateY(${currentMouse.y}px) rotate(${currentMouse.deg}deg)` 
      : 'translateX(0)',
    },
  }))`
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;      
    background: none !important;
`;

const winkEye = keyframes`
    0% {
        transform: scale(1, 0.05);
    }
    5% {
        transform: scale(1, 1);
    }
`;

export const Eye = styled.div`
    width: 6.25em;
    height: 6.25em;
    border-radius: 50%;
    animation: ${winkEye} 10s linear infinite;
    background-color: #fff;
`;

export const Nose = styled.div.attrs(({ currentMouse }) => ({
    style: {
        transform: currentMouse 
        ? `rotate(${-currentMouse.x}deg)`
        : 'rotate(0)'
    }
}))`
    position: absolute;
    left: 9.375em;
    top: 1.5625em;
    width: 4.125em;
    height: 10.625em;
    background-color: #fff;
`;

export const Mouth  = styled.div.attrs(({ currentMouse }) => ({
    style: {
        transform: currentMouse 
        ? `rotate(${currentMouse.x}deg)`
        : 'rotate(0)'
    }
}))`
    position: absolute;
    left: 50%;
    bottom: 0;
    margin-left: -8.125em;
    width: 16.25em;
    height: 7.875em;
    border-radius: 0 0 120px 120px;
    background-color: #fff;
`;
