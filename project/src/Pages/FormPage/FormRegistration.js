import Form from "../../Components/Form/Form";
import {useDispatch} from "react-redux";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {Link} from "react-router-dom";
import React from "react";
import {setUser} from "../../Store/Reducers/Reducers";


function FormAuthorization() {

    const dispatch = useDispatch();
    const handleRegister = ( email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) =>{
                console.log(user)
                dispatch(setUser({
                    email:user.email,
                    id:user.uid,
                    token:user.accessToken,
                }))

            })
            .catch(console.error)
    }


    return (
       <Form
           title={'Регистрация'}
           handleClick={handleRegister}
           link={<Link to={'auth'} className={'link-auth'}>Уже зарегистрированы?</Link>}

       />
    );
};

export default FormAuthorization;