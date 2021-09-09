import React from 'react'
import s from '../PopUps/Login.module.scss'

function LoginWith({className, googles}) {
    return (
        <div className={s.other}>
        <div className={s.otherTitle}>Или</div>
        <div className={s.otherSubtitle}> войдите как пользователь:</div>
        <div className={`${s.buttons}  `}>
            <div className={`${s.button} ${className}`}> <img src='https://kela.ua/images/icons/in-facebook.svg'></img> Facebook</div>
            <div className={`${s.button} ${s.google} ${className} ${googles}`}> <img src='https://kela.ua/images/icons/in-google.svg'></img>Google</div>
        </div>
    </div>
    )
}

export default LoginWith
