import React from 'react';
import './FooterStyle.css';

function Footer(){
    return (

        <footer className={'page-footer'}>
            <div className={'footer-contacts'}>
                <a className={'footer-link'} href={'tel:88005555555'}>8 (800) 555-55-55</a>
                <span className={'footer-contacts-schedule'}>Работаем 7 дней в неделю</span>
                <span className={'footer-contacts-schedule'}>9:00 - 18:00</span>
            </div>

            <div className={'footer-copyright'}>© Porten</div>


        </footer>


    );
};

export default Footer;