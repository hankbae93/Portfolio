import React from 'react';
import {
    ContactWrapper,
    ContactHeading,
    ContactUl,
    ContactLi
} from './Contact.elements';
const Contact = () => {
    return (
        <>
        <ContactWrapper>
            <ContactHeading>Contact</ContactHeading>
            <ContactUl>
                <ContactLi>
                    깃허브 : 
                </ContactLi>
                <ContactLi>
                    전화번호 : 
                </ContactLi>
                <ContactLi>
                    이메일 : 
                </ContactLi>
            </ContactUl>
        </ContactWrapper>   
        </>
    );
};

export default Contact;