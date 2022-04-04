import React, {useState} from 'react';
import './FormStyle.css';
import {useForm} from "react-hook-form";


function Form({title, handleClick, link}) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const {
        register,
        handleSubmit,
        formState:{
            errors
        },

    } = useForm({
        mode:'onBlur'
    });
    const onSubmitData = (data) => localStorage.setItem('data', JSON.stringify(data))


    return (
        <div className={'form__wrapper'}>
            <div>
                <div className="container__form">
                    <form className="form" method="/" action=""  onSubmit={handleSubmit(onSubmitData)}>
                        <div className={'container__form-wrapper'}>
                            <h1 className="form-header">{title}</h1>
                            <div className="form__fields">
                                <div className="form__fields-input-wrapper-email ">
                                    <span className="form__star first">*</span>
                                    <label className="form__fields-label" htmlFor="email">Email</label>
                                    <input className="form__fields-input"
                                           type="email"
                                           name="email"
                                           id="email"
                                           value={email}
                                           placeholder={"Введите email"}
                                           {...register('email', {
                                               required:'Поле обязательно для заполнения',
                                               pattern:{
                                                   value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                   message:'Email невалидный'
                                               },
                                           })}
                                           onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <div className="form__validation-email">
                                        {errors?.email && errors?.email?.message}
                                    </div>
                                </div>
                                <div className="form__fields-input-wrapper-pass">
                                    <span className="form__star second">*</span>
                                    <label className="form__fields-label" htmlFor="password">Пароль</label>
                                    <input className="form__fields-input"
                                           type="password"
                                           name="password"
                                           value={pass}
                                           id="password"
                                           placeholder="Введите пароль"
                                           {...register('password',{
                                               required: 'Поле обязательно для заполнения',
                                               minLength:{
                                                   value: 8,
                                                   message: 'Минимум 8 символов'
                                               }
                                           })}
                                           onChange={(e) => setPass(e.target.value)}


                                    />
                                    <div className="form__validation-password ">
                                        {errors?.password && errors?.password?.message}
                                    </div>
                                </div>
                            </div>
                            <div className="form__checkbox-wrapper">
                                <div className={'form__checkbox-container'}>
                                    <span className="form__star third">*</span>
                                    <input className="form__checkbox-input"
                                           type="checkbox"
                                           name="checkbox"
                                           id="checkbox"
                                           {...register('checkbox',{
                                               required:'Поле обязательно для заполнения'
                                           })}
                                    />
                                    <div className="form__checkbox-mark"/>
                                    <label className="form__checkbox-label" htmlFor="checkbox">Я согласен с <a
                                        className="form__checkbox-label-link" target="_blank" rel="noreferrer noopener nofollow"
                                        href="https://www.google.com/">Правилами пользования приложением</a>
                                    </label>
                                </div>
                                <div className={'link-wrapper'}>
                                    {link}
                                </div>

                            </div>
                            <div className="form__validation-checkbox">{errors?.checkbox?.message}</div>
                        </div>
                        <div>
                            <button className="form__button"
                                    type="submit"
                                    name="button"
                                    onClick={ () => handleClick(email, pass)}
                            >
                                {title}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;