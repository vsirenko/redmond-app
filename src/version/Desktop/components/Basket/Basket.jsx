import React, { Fragment ,  useEffect, useState} from 'react'
import sprite from '../../../../assets/icons/icons-sprite.svg'
import s from './Basket.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { basketDelete,itemIncrement,itemDecrement } from '../../../../actions/Cart'
import {setLS} from '../../../../utils/LocalStore'
import { useLocation, Link } from 'react-router-dom';

export default function Basket () {

    const dispatch = useDispatch()
    const items = useSelector(state => state.Basket.items)
    const [total, setTotal] = React.useState(0)
    const lang = useSelector(state => state.language.default)
    const name = 'cartItems'
    const location = useLocation()
    const checkPage = location.pathname.search("category")
    const [tab, setTab] = useState(2)

    useEffect(() => {
        setTotal( items.reduce((acc,value) => {
            const quantity = value.quantity
            const price =  value.price.replace(/\s/g, "")
            value = value.salePrice.replace(/\s/g, "")
            const tryPrice = Number(value) === 0 ? Number(price) : Number(value) 
           return acc = quantity * tryPrice + acc
        }, 0))
        if (items){ setLS(name ,items)}
    }, [items])
    useEffect(() => {
        checkPage !== -1 && setTab(1)
    }, [checkPage])
    const itemDel = (id) => {
        dispatch(basketDelete(id))
    }
    const addItem = (id) => {
            dispatch(itemIncrement(id))
    }
    const removeItem = (id) => {
        dispatch(itemDecrement(id))
    }



    return(
        <Fragment>
            {checkPage !== -1 && 
                <div className={s.tabs}>
                    <div className={`${s.tab} ${tab === 1 && s.active}`} onClick={() => setTab(1)}>{lang === 'ru'? "Фильтры" : 'Фільтри'}</div>
                    <div className={`${s.tab} ${tab === 2 && s.active}`} onClick={() => setTab(2)}>{lang === 'ru'? "Корзина" : 'Кошик'}</div>
                </div>
            }
            <div className={`${s.basket} ${checkPage !== -1 && s.catalogPage}`}>
            <div className={s.content}>
            {tab === 1 ? 'фильтры' : 
            <>
            {items && items.length === 0 ? 
            
            <div className={s.clear}>
                <svg className={s.clear__icon}>
                <use href={sprite + '#i-basket-big'}/>
                </svg>
            <p>{lang === 'ru'? "Ваша корзина пуста" : 'Ваш кошик порожній'}</p>
            </div>

        : items.map((item, key) => {
            const priceToNumb = (item.price && item.price.replace(/\s/g, ""))  || 0
            const salePriceToNumb = (item.salePrice && item.salePrice.replace(/\s/g, ""))  || 0
                    return(
                        <div key={key} className={s.item}>
                        <Link to={`/catalog/${item.id}`}>
                            <div className={s.image}>
                            <img className={s.image} src={`https://polaris-shop.com.ua/imgcache/medium/${item.id}/small/${item.mainImg}`} alt={item.mainImg} />
                            </div>
                        </Link>
                            <div className={s.info}>
                            <Link to={`/catalog/${item.id}`}>
                                <div className={s.name}>{item.name && item.name[lang]}</div>
                            </Link> 
                                <div className={s.prices}>
                                {(Number(priceToNumb) > 0, Number(salePriceToNumb)) > 0 &&
                                    <>
                                    <span className={`${s.price__old} ${s.uah}`}>{item.price} </span>  
                                    <span className={s.uah}>{item.salePrice}</span>
                                    </>
                                }
                                {Number(salePriceToNumb) === 0 && <span className={s.uah}> {Number(priceToNumb)}</span> }
                                </div>
                                <div className={s.close} onClick={() => itemDel(item.id)}>x</div>
                            </div>
                            <div className={s.quantity}>
                                <div className={s.incr} onClick={() => addItem(item.id)}>+</div>
                                <div className={s.count}>{item.quantity}  </div>
                                <div className={s.decr} onClick={() => removeItem(item.id)}>-</div>
                            </div>
                        </div>
                        )
                })}
                <div className={s.order__info}>
                <div className={s.sum}>
                    <p className={s.sum__total}>{lang === 'ru' ? 'Итого:' : 'Разом:'}</p>
                    <p className={s.uah}>{
                    total
                    }</p>
                    
                </div>

                <div className={s.order__get}>
                    {items && items.length > 0 ? <button className={`${s.btn} ${s.red}`}> {lang === 'ru' ? 'Оформить заказ' : 'Оформити замовлення'} </button> :  <button className={s.btn}>{lang === 'ru' ? 'Оформить заказ' : 'Оформити замовлення'}</button> }

                </div>
                </div>
            </>
            }
            
                </div>
            </div>
        </Fragment>
    );
}