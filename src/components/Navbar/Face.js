import React, { useEffect, useState } from 'react';
import {
    FaceContainer,
    Eyes,
    Eye,
    Nose,
    Mouth    
} from './Face.elements';

const Face = ({ menu }) => {
    const [currentMouse, setCurrentMouse] = useState({});
    const [currentScroll, setCurrentScroll] = useState({});
    
    const moveFace = e => {
        const faceObj = {};
        const fullWidth = window.innerWidth;
        const fullHeight = window.innerHeight;                
        faceObj.x = -(fullWidth / 2 - e.screenX) / 100;
        faceObj.y = -(fullHeight / 2 - e.screenY) / 100;
        faceObj.deg = (faceObj.x * faceObj.y) / 10;      
        faceObj.deg2 = (faceObj.y )   
        setCurrentMouse({...faceObj});        
    };

    const scaleFace = e => {
        const y = window.scrollY;
        const viewHeight = window.innerHeight;
        const viewWidth = window.innerWidth;
        const firstTop = Math.floor(viewHeight / 100 * 27); // face default top
        const baseTop = (viewWidth < 1101) ? 32 : 42;  // face animation end top
        const topDiffer = firstTop - baseTop;   
        const animationEndY = Math.floor(viewHeight / 2);
        const currentTop = firstTop - Math.floor((y / animationEndY) * (topDiffer)); 
        const currentScale = (1.1 - (y / animationEndY)).toFixed(3);

        if (y > 0 && y <= animationEndY) {
            setCurrentScroll({
                ...currentScroll, 
                top: currentTop,
                scale: currentScale
            });
        } else if (y > animationEndY) {
            setCurrentScroll({
                ...currentScroll, 
                top: baseTop,
                scale: 0.1
            });
        }        
    };

    useEffect(() => {
        window.addEventListener('mousemove', moveFace);       
        window.addEventListener('scroll', scaleFace);             
        return () => {
            window.removeEventListener('mousemove', moveFace);
            window.removeEventListener('scroll', scaleFace);
        }
    }, []);

    return (
        <FaceContainer currentScroll={currentScroll} menu={menu}>
            <Eyes currentMouse={currentMouse}>
                <Eye></Eye>
                <Eye></Eye>
            </Eyes>
            <Nose currentMouse={currentMouse}/>
            <Mouth currentMouse={currentMouse}/>
        </FaceContainer>
    );
};

export default Face;