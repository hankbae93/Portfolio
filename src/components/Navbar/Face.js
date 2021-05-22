import React, { useEffect, useRef, useState } from 'react';
import {
    FaceContainer,
    Eyes,
    Eye,
    Nose,
    Mouth    
} from './Face.elements';

const Face = () => {
    const [currentMouse, setCurrentMouse] = useState({});
    const faceRef = useRef();
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

    useEffect(() => {
        window.addEventListener('mousemove', moveFace);       
        return () => {
            window.removeEventListener('mousemove', moveFace);
        }
    }, []);

    return (
        <FaceContainer ref={faceRef}>
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