import React from 'react';
import '../../Components/Form/FormStyle.css';
import {useDispatch} from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "../../Components/Form/Form";
import {Link} from "react-router-dom";
import {setUser} from "../../Store/Reducers/Reducers";

function FormAuthorization() {
    const dispatch = useDispatch();
    const handleLogin = ( email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) =>{
                dispatch(setUser({
                    email:user.email,
                    id:user.uid,
                    token:user.accessToken,
                }))
            })
            .catch(() => alert('Пользователя не существует'))
    }
    return (
        <Form
            title={'Авторизация'}
            handleClick={handleLogin}
            link={<Link to={'/registration'} className={'link-auth'}>Ещё не зарегистрированы</Link>}
        />
    );
};

export default FormAuthorization;