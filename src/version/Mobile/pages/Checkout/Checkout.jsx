import React, { useState } from 'react'
import ReactInputMask from 'react-input-mask'
import Input from '../../components/Input/Input'
import LoginWith from '../../components/LoginWith/LoginWith'
import H3 from '../../elements/Titles/H3'
import s from './Checkout.module.scss'
import BasketTile from '../../components/BasketTile/BasketTile'
import { useSelector } from 'react-redux'

function Checkout() {
    const items = useSelector(state => state.Basket.items)
    const methods = ['Наличными', 'Безналичный расчёт', 'Картой Visa/Mastecard (LiqPay)']
    const [paymentMethod, setpaymentMethod] = useState(methods[0])
    const [visibleSelect, setVisibleSelect] = useState(false)
    return (
        <div className={s.mainWr}>
            <H3 title='Оформление заказа'/>
            <form>
                <div className={s.contact}>
                    <H3 classLocal={s.title}>Укажите контактную информацию</H3>
                    <ReactInputMask className={s.input} mask="+380 (99)-999-9999" placeholder='+380 (00)-000-000'/>
                    <Input  className={s.input} placeholder='Ваше имя' />
                    <Input className={s.input} placeholder='Ваш email'/>
                    <LoginWith  className={s.login} googles={s.google} />
                </div>
                <H3 title='Ваш заказ'/>
                {items.map((item) => <BasketTile {...item} />)}
                <H3 title='Способы оплаты'/>
                <div className={s.contact}>
                Укажите способ оплаты:
                    <div className={s.dropdown} >
                        <p onClick={ () => setVisibleSelect(!visibleSelect)}>{paymentMethod}</p> 
                        <div className={`${s.dropdownMenu} ${visibleSelect && s.active}`}>
                            {methods.map((item) => {
                                return(
                                    <>
                                    <div className={s.item}  onClick={() => {
                                        setpaymentMethod(item)
                                        setVisibleSelect(false)
                                        }}> {item} </div>
                                    </>
                                )
                            })}
                            </div>
                    </div>
                </div>
                <H3 title='Ваш коментарий'/>
                <div className={s.contact}>
                Ваш коментарий
                <Input className={`${s.input} ${s.bigInput}`}/>
                </div>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

            </form>
        </div>
    )
}

export default Checkout
