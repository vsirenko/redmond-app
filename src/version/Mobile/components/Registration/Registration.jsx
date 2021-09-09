import React, { useState } from 'react'
import { validateEmail } from '../../../../utils/ValidateEmail'
import Button from '../../elements/Buttons/Button'
import Input from '../Input/Input'
import LoginWith from '../LoginWith/LoginWith'
import s from '../PopUps/Login.module.scss'

function Registration() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        repeat_password: ''
    })
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
    })
    const handlerInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const validate = () => {
        let newErrors = {}
        if(!validateEmail(form.email)) {
            newErrors['email'] = 'Вооу не коректный email'
        }
        if(form.name.length < 2 || form.name.length > 18) {
            newErrors['name'] = 'Имя не может быть меньше 2 или больше 15'
        }
        if(form.password < 6 || form.repeat_password < 6) {
            newErrors['password'] = 'Пароли не может быть меньше 6 симоволов'
        }
        if(form.password !== form.repeat_password) {
            newErrors['password'] = 'Пароли не совпадают'
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }
    const handlerForm = (e) => {
        e.preventDefault()
        validate()
        if(!validate()) return
    }
    
    return (
        <>
        <form onSubmit={e => handlerForm(e)}>
        <label>
        {!!errors.name && <div className={s.error}>{errors.name}</div>}
            <p>Ваше Имя:</p>
            <Input onChange={handlerInput} name='name' placeholder='Введите ваше имя'/>
        </label>
        <label>
        {!!errors.email && <div className={s.error}>{errors.email}</div>}
            <p>Ваша электронная почта:</p>
            <Input onChange={handlerInput} name='email' placeholder='Введите ваш email'/>
        </label>
        <label>
            <p>Пароль:</p>
            <Input type='password' onChange={handlerInput} name='password' placeholder='Введите ваш пароль'/>
        </label>
        <label>
        {!!errors.password && <div className={s.error}>{errors.password}</div>}
            <p>Подтверждение пароля:</p>
            <Input type='password' onChange={handlerInput} name='repeat_password' placeholder='Повторите ваш пароль'/>
        </label>
        <label className={s.checkbox}><Input className={s.check} type='checkbox'/> Обработка данных</label>
        <label className={s.checkbox}><Input className={s.check} type='checkbox'/>Ознакмолен с условиями</label>
        <Button title={'Регистрация'} />
        </form>
        <LoginWith />
        </>
    )
}

export default Registration
