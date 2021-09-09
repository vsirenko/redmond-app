import React from 'react'
import s from './Logo.module.scss'
import sprite from '../../../../../assets/icons/icons-sprite.svg'
import {Link} from 'react-router-dom'


function Logo() {
    return(

    <Link to='/'>
    <div className={s.logo}>
            <svg className={s.icon}>
                <use href={sprite + '#i-logo'}/>
            </svg>
    </div>
    </Link>
    
    );

}

export default Logo;