import React, { useState, useEffect } from 'react'
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import InputMask from "react-input-mask";

import   {getItemBody} from '../../../actions/Api'
import { addToBasketThunk } from '../../../actions/BasketThunk'

import LeftNav from '../components/Navigation/LeftNav/LeftNav.jsx'
import Basket from '../components/Basket/Basket'
import Button from '../../Desktop/components/Button/Button.jsx'
import Characteristics from '../components/ItemPage/Characteristics'
import ItemImage from '../components/ItemPage/Image'
import sprite from '../../../assets/icons/icons-sprite.svg'
import s from './ProductPage.module.scss'
import Header from '../components/Header/Header';

function ProductPage() {


    const { id } = useParams();
    const [items, setItems] = useState({});
    const basketItems = useSelector(state => state.Basket.items )
    const [findItem, setFindItem] = useState(null)
    const dispatch = useDispatch()
    const lang = useSelector(state => state.language.default)

    useEffect(()=>{
        setFindItem( basketItems.find(item => item.id === items.id ? item.quantity : null))
    }, [ basketItems, items])

    useEffect(()=> {
        getItemBody(id).then(respons => setItems(respons))
    }, [id])

    const addToBasket = () => {
        const obj = {
            id: items.id,
            mainImg: items.mainImg,
            name: items.name,
            price: items.price,
            salePrice: items.salePrice
        }
        dispatch(addToBasketThunk(obj))
    }

    const price = (items.price && items.price.replace(/\s/g, ""))  || 0
    const salePrice = (items.salePrice && items.salePrice.replace(/\s/g, ""))  || 0

    return (
        <>
        <Header />
            <LeftNav />
                <div className={s.body}>

                    <div className={s.head}>
                        <div className={s.title}>{items.name &&  items.name[lang]}</div> <div className={s.code}> {lang === 'ru' ? 'Код товара:' : 'Код товару:'} <span>{items.oneCId}</span></div>
                    </div>

                    <div className={s.item__body}>
                        <ItemImage actions={salePrice} {...items}/>
                        <div className={s.orderBar}>
                            <div className={s.price}>
                                <div className={s.sum}>
                                    {(Number(price) > 0 && Number(salePrice) > 0) &&
                                        (<>
                                        <span className={`${s.old} ${s.uah}`}>{Number(price)}</span>
                                        <span className={`${s.new} ${s.uah}`}>{Number(salePrice)}</span>
                                        </>
                                        )}
                                    {Number(salePrice) === 0 && <span className={`${s.new} ${s.uah}`}>{Number(price)}</span> }

                                </div>

                                {findItem && 
                                findItem.quantity ? 
                                <Button class={`${s.btn} ${s.grey}`} text={lang === 'ru' ? 'В корзине' : 'В кошику'} /> :  
                                <Button onClick={addToBasket} text={lang === 'ru' ? 'Заказать' : 'Замовити'} class={s.btn}/>
                                }
                            </div>

                            <div className={s.phone}>
                            <span className={s.title}>
                            {lang === 'ru' ? 'Укажите номер телефона для заказа в 1 клик' : 'Вкажіть номер телефону для замовлення в 1 клік'}
                            </span>
                                <label className={s.label}>
                                    <InputMask className={s.input} mask="+380 (99)-999-9999" placeholder='+380 (00)-000-000'/>
                                    <Button text={lang === 'ru' ? 'Заказать' : 'Замовити'} class={s.btn} />
                                </label>
                            </div>

                            <div className={s.buttons}>
                                <div className={s.wish}>
                                    <svg className={s.icon}>
                                        <use href={sprite + '#i-wish'}/>
                                    </svg>
                                    {lang === 'ru' ? 'В желания' : 'В бажання'}
                                </div>
                                <div className={s.compare}>
                                    <svg className={s.icon}>
                                        <use href={sprite + '#i-compare'}/>
                                    </svg>
                                    {lang === 'ru' ? 'В сравнение' : 'В порівняння'}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Characteristics {...items}/>
                <Basket />
        </>
    )
}

export default ProductPage
