import React from 'react'
import s from './Input.module.scss'

function Input({className, placeholder, onChange, name, value, type}) {

    return (
        <div>
            <input 
                type={type}  
                name={name} 
                value={value} 
                onChange={e => onChange && onChange(e)}                
                className={`${s.input} ${className}`} 
                placeholder={placeholder}>
            </input> 
        </div>
    )
}

export default Input
