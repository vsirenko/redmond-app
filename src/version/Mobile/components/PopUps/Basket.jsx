import React, {useEffect, useState} from 'react'
import s from './Basket.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../elements/Buttons/Button'
import BasketTile from '../../components/BasketTile/BasketTile'
import {setLS} from '../../../../utils/LocalStore.js'
import sprite from '../../../../assets/icons/icons-sprite.svg'
import { setPopupBasket } from '../../../../actions/PopUp'
import useClickOutside from '../../../../utils/MissClick'
import { Link } from 'react-router-dom';

function Basket() {
    const lang = useSelector(state => state.language.default)
    const items = useSelector(state => state.Basket.items)
    const popupStatus = useSelector(state => state.PopUp.basket)
    const [total, setTotal] = useState(0)
    const name = 'cartItems'
    const dispatch = useDispatch()
    const ref = useClickOutside(false, () => dispatch(setPopupBasket(false)), 'basket--popup' )
    useEffect(() => {
        setTotal( items.reduce((acc,value) => {
            const quantity = value.quantity
            const price =  value.price.replace(/\s/g, "")
            value = value.salePrice.replace(/\s/g, "")
            const tryPrice = Number(value) === 0 ? Number(price) : Number(value) 
           return acc = quantity * tryPrice + acc
        }, 0))
        if(items) {setLS(name, items)}
    }, [items])
    return (
        <div ref={ref} className={`${s.popup} ${popupStatus && s.active}`}>
            <div className={s.wr}>
            {items.length === 0 ? 
                <div className={s.clear}>
                        <svg className={s.clear__icon}>
                            <use href={sprite + '#i-basket-big'}/>
                        </svg>
                    <p>{lang === 'ru'? "Ваша корзина пуста" : 'Ваш кошик порожній'}</p>
                </div>  : 
                items.map((item, key)=> {
                    return(
                        <>
                        <BasketTile {...item}/>
                        </>
                    )
                })
            }
            </div>
            <div className={s.order}>
            <div className={s.total}>
                {lang === 'ru' ? 'Итого:' : 'Разом:'}
                <div className={s.uah}>{total}</div>
                </div>
                <Link to='/checkout'>
                <Button title={lang === 'ru' ? 'Оформить заказ' : 'Оформити замовлення'} class={`${s.button} ${items.length === 0 && s.grey}`}/>
                </Link>
            </div>
        </div>
    )
}

export default Basket
