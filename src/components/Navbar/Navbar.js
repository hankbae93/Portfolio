import React, { useState } from 'react';
import {
    NavContainer,
    NavHeading,
    NavLogo,
    NavMenuBtn,
    NavMenu,
    NavItem,
    NavLink,
    NavMenuBtnBar,
    NavMenuBackground
} from './Navbar.elements';
import Face from './Face';

const Navbar = () => {
    const [menu, setMenu] = useState(true);

    const handleMenu = e => {
        if (!menu) {
            const section = e.target.textContent;
            if (section === "") {
                setMenu(!menu);
            } else {
                const view = document.getElementById(section);
                view.scrollIntoView();    
                setMenu(!menu);            
            }        
            
        } else {
            setMenu(!menu);
        }
    };
        
        
        
    
    return (
        <NavContainer>
            <NavHeading>
                <NavLogo 
                src={menu 
                    ? `${require('../../images/logo.png').default}` 
                    : `${require('../../images/logo_opened.png').default}`} 
                alt="Ranja Function"/>                
            </NavHeading>

            <Face menu={menu}/>

            <NavMenuBtn onClick={handleMenu} menu={menu}>
                <NavMenuBtnBar />
                <NavMenuBtnBar />
                <NavMenuBtnBar />
            </NavMenuBtn>
            
            <NavMenuBackground menu={menu}>
                <NavMenu>
                    <NavItem>
                        <NavLink onClick={handleMenu}>ABOUT</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={handleMenu}>WORK</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={handleMenu}>CONTACT</NavLink>
                    </NavItem>                
                </NavMenu>
            </NavMenuBackground>
        </NavContainer>
    );
};

export default Navbar;