import React, { useState } from 'react'
import  s from './Login.module.scss'
import Registration from '../Registration/Registration'
import LoginForm from '../Login/Login'
import useClickOutside from '../../../../utils/MissClick'
import { useDispatch, useSelector } from 'react-redux'
import { setPopupLogin } from '../../../../actions/PopUp'

function Login() {
    const [activeTab, setActiveTab] = useState(0)
    const tabs = ['Авторизация', 'Регистрация']
    const popupState = useSelector(state => state.PopUp.login)
    const dispatch = useDispatch()
    const ref = useClickOutside(false, () => dispatch(setPopupLogin(false)), 'login--popup' )

    return (
        <div ref={ref} className={`${s.popup} ${popupState && s.active}`} >
            <div className={s.tabs}>
                {tabs.map((item, key)=> {
                    return(
                        <div
                        key={key}
                        onClick={() => setActiveTab(key)}
                        className={`${s.tab} ${activeTab === key && s.tabactive}`}>
                        {item}
                        </div>
                    )
                })}
            </div>
            {activeTab === 0 && 
                <LoginForm />
            }
            {activeTab === 1 &&
                <Registration />
            }


        </div>
    )
}

export default Login
