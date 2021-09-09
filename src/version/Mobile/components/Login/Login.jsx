import React, { useState } from 'react'
import Button from '../../elements/Buttons/Button'
import Input from '../Input/Input'
import s from '../PopUps/Login.module.scss'
import useClickOutside from '../../../../utils/MissClick'
import { useDispatch, useSelector } from 'react-redux'
import { setPopupLogin } from '../../../../actions/PopUp'
import { validateEmail } from '../../../../utils/ValidateEmail'
import LoginWith from '../LoginWith/LoginWith'

function Login() {
    const [activeTab, setActiveTab] = useState(0)
    const [visiblePass, setVisiblePass] = useState(false)
    const tabs = ['Авторизация', 'Регистрация']
    const dispatch = useDispatch()
    const ref = useClickOutside(false, () => dispatch(setPopupLogin(false)), 'login--popup' )
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })
    const handlerForm = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const validate = () => {
        let newErrors = {}
        if(form.email.length === 0) {
            newErrors['email'] = 'Поле email не может быть пустым!'
        } 
        if(form.password.length === 0) {
            newErrors['password'] = 'Поле pass не может быть пустым!'
        } 
        if(!validateEmail(form.email)) {
            newErrors['email'] = 'Ваш Email не коректный!'
        }
        if(form.password.length < 6 || form.password.length > 16) {
            newErrors['password'] = 'Парольн не может быть меньше 6 или больше 16 символов!'
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0 
    }
    const handlerCheckBox = () => setVisiblePass(!visiblePass)
    const henadlerLoginForm = (e) => {
        e.preventDefault()
        validate()
        if(!validate()) return 
    }
    return (
        <>
        <form onSubmit={e => henadlerLoginForm(e)}>
            <label>
                <p>Ваш email:</p>
                {!!errors.email && <div className={s.error}>{errors.email}</div>}
                <Input onChange={handlerForm} name='email' placeholder='Ваш email'/>
            </label>
            <label>
                <p>Ваш пароль:</p>
                {!!errors.password && <div className={s.error}>{errors.password}</div>}
                <Input onChange={handlerForm} name='password' type={`${visiblePass ? 'text' : 'password'}`} placeholder='Ваш пароль' />
            </label>
            <label className={s.checkbox} onChange={handlerCheckBox}><Input className={s.check} type='checkbox' /> Показать пароль</label>
            <div className={s.enter}><Button  class={s.btn} title={'Войти'}/></div>
        </form>
        <LoginWith />
        </> 
    )
}

export default Login
