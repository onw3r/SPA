import React from 'react';
import './HeaderStyle.css';
import {Link} from "react-router-dom";
import {useAuth} from "../../../Components/Hooks/useAuth";
import {useDispatch} from "react-redux";
import {removeUser} from "../../../Store/Reducers/Reducers";


function Header(){
    const dispatch = useDispatch()
    const {isAuth} = useAuth();

    return (
        <header className={'main__header'}>
                <div className={'main__header-top'}>
                    <div className={'header-top-contacts'}>
                        <a className={'header-top-link'} href={'tel:88005555555'}>8 (800) 555-55-55</a>
                        <span className={'header-top-contacts-schedule'}>Работаем 7 дней в неделю</span>
                        <span className={'header-top-contacts-schedule'}>9:00 - 18:00</span>
                    </div>
                    <div className={'header-top-login'}>
                        {isAuth ? <Link to={'/'} className={'header-top-login-link'} onClick={() => dispatch(removeUser())}>Выйти</Link> : <Link to={'registration'} className={'header-top-login-link'}>Войти / Регистрация</Link>}
                    </div>
                </div>
                <div className={'main__header-mid'}>
                    <div className={'header-mid-logo'}>
                        <div className={'header-mid-logo-span'}><Link to={'/'} className={'header-mid-main-link'} >PORTEN</Link></div>
                    </div>
                    <div className={'header-mid-menu'}>
                        <div className={'header-mid-menu-catalog'}>
                            <Link to={'catalog'} className={'header-mid-menu-link'} >Каталог</Link>
                            <Link to={'basket'} className={'header-mid-menu-link'}>Корзина</Link>
                        </div>
                        <div className={'header-mid-menu-basket'}>

                        </div>

                    </div>

                </div>
        </header>

    );
};

export default Header;