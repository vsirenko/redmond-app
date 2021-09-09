import React, {useEffect, useState} from 'react'
import s from './BasketPopUp.module.scss'
import { useSelector} from 'react-redux';
import BasketTile from '../Basket/BasketTile/BasketTile';
import Button from '../Button/Button';
import sprite from '../../../../assets/icons/icons-sprite.svg'

function BasketPopUp({openBasket}) {
    const lang = useSelector(state => state.language.default)
    const items = useSelector(state => state.Basket.items)
    const [total, setTotal] = useState(0)
    useEffect(() => {
        setTotal( items.reduce((acc,value) => {
            const quantity = value.quantity
            const price =  value.price.replace(/\s/g, "")
            value = value.salePrice.replace(/\s/g, "")
            const tryPrice = Number(value) === 0 ? Number(price) : Number(value) 
           return acc = quantity * tryPrice + acc
        }, 0))
    }, [items])
    return (
        <div  className={`${s.popup} ${openBasket ? s.active : ''}`}>
            <div className={s.contetns}>
            {items.length === 0 ? 
                    <div className={s.clear}>
                        <svg className={s.clear__icon}>
                            <use href={sprite + '#i-basket-big'}/>
                        </svg>
                    <p>{lang === 'ru'? "Ваша корзина пуста" : 'Ваш кошик порожній'}</p>
                    </div> 
                    : items.map((item, key)=>{
                    return(<BasketTile key={key} {...item}/>)
                })}
                <div className={s.order}>
                        <Button text={lang === 'ru' ? 'Оформить заказ' : 'Оформити замовлення'} class={items.length === 0 && s.button}/>
                        <div className={s.totalSum}><p>{lang === 'ru' ? 'Итого:' : 'Разом:'}</p><div className={s.uah}>{total}</div></div>
                </div>
            </div>
        </div>
    )
}

export default BasketPopUp
