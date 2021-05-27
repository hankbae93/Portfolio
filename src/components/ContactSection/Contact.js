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
        <ContactWrapper id="CONTACT">
            <ContactHeading>Contact</ContactHeading>
            <ContactUl>
                <ContactLi>
                    깃허브 : <a href="https://github.com/ranjafunc">https://github.com/ranjafunc</a>
                </ContactLi>
                <ContactLi>
                    전화번호 : 010-4399-9340
                </ContactLi>
                <ContactLi>
                    이메일 : cjstjekd23@naver.com
                </ContactLi>
            </ContactUl>
        </ContactWrapper>   
        </>
    );
};

export default Contact;