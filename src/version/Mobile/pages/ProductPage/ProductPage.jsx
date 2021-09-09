import React, { useEffect, useState } from 'react'
import ReactInputMask from 'react-input-mask'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getItemBody } from '../../../../actions/Api'
import H3 from '../../elements/Titles/H3'
import s from './ProductPage.module.scss'
import Button from '../../elements/Buttons/Button'
import Image from '../../components/ItemPage/Image'
import { useTitle } from '../../../../utils/UseTitle'
import { addToBasketThunk } from '../../../../actions/BasketThunk'
import Reviews from '../../components/ItemPage/Reviews'

function ProductPage() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const [item, setItem] = useState({})
    const lang = useSelector(state => state.language.default)
    const basketItems = useSelector(state => state.Basket.items )
    const [currentCatalog, setCurrentCatalog] = useState(0)
    const [findItem, setFindItem] = useState({})
    useEffect(()=> {
        getItemBody(id).then( res => setItem(res))
    }, [id])
    useEffect(()=>{
        setFindItem(basketItems.find(e => e.id === item.id))
    }, [ basketItems, item])
    useTitle(item.name && item.name[lang])
    
    const price = (item.price && item.price.replace(/\s/g, ""))  || 0
    const salePrice = (item.salePrice && item.salePrice.replace(/\s/g, ""))  || 0
    
    const catalog = [{ru: 'Характеристики', ua: 'Характеристики'},{ru: 'Вопросы и ответы', ua: 'Питання та відповіді'},{ru: 'Описание', ua: 'Опис'},{ru: 'Отзывы', ua: 'Відгуки'}]
    const handleAddToCart = () => {
        const obj = {
            id: item.id,
            mainImg: item.mainImg,
            name: item.name,
            price: item.price,
            salePrice: item.salePrice
        }
        dispatch(addToBasketThunk(obj))
    }
    return (
        <div className={s.wr}>
            <div className={s.main}>
            <H3 title={item.name && item.name[lang]} classLocal={s.h3} />
            <span className={s.code}>
                            Код товара: <strong>{item.oneCId}</strong>
            </span>
            <div className={s.gallery}>
            {salePrice > 0 &&  <div className={s.action}> {lang === 'ru' ? 'Супер цена' : 'Супер ціна'}</div>}
                <Image actions={salePrice} {...item}/>
            </div>
            <div className={s.bp}>
            <div className={s.price}>
            {(Number(price) > 0 && Number(salePrice) > 0) &&
                (   
                    <>
                        <div className={`${s.old} ${s.uah}`}><span>{price}</span></div>
                        <div className={`${s.new} ${s.uah}`}><span>{salePrice}</span></div>
                    </>
                )}
            {Number(salePrice) === 0 && <span className={`${s.new} ${s.uah}`}>{Number(price)}</span> }
            </div>
            </div>
            <div className={s.buyOneClick}>
                <div className={s.title}>
                {lang === 'ru' ? 'Укажите номер телефона для заказа в 1 клик' : 'Вкажіть номер телефону для замолвення в 1 клік'}
                </div>
                    <form action="" className={s.form}>
                    <ReactInputMask className={s.input} mask="+380 (99)-999-9999" placeholder='+380 (00)-000-000'/>
                    <Button title='Заказать'/>
                    </form>
            </div>
            <div>
            {findItem &&    findItem.id === item.id ? 
                    <Button class={`${s.btn} ${s.grey}`} title={lang === 'ru' ? 'В корзине' : 'В кошику'} /> :  
                    <Button class={`${s.btn}`} onClick={handleAddToCart} title={lang === 'ru' ? 'Заказать' : 'Замовити'} />
            }
            </div>
            </div>
            <div className={s.info}>
                <div className={s.tabs}>
                    {catalog.map((item, key) => {
                        return(
                            <div className={`${s.tabsItem} ${currentCatalog === key && s.active}`} onClick={()=> setCurrentCatalog(key)}>
                                {item[lang]}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={s.desc}>
                {currentCatalog === 0 &&
                <>
                    <div className={s.info_item}>
                    тут будут характеристкики
                    </div>
                    <div className={s.info_item}>
                    тут будут характеристкики
                    </div>
                    <div className={s.info_item}>
                    тут будут характеристкики
                    </div>
                    <div className={s.info_item}>
                    тут будут характеристкики
                    </div>
                    <div className={s.info_item}>
                    тут будут характеристкики
                    </div>
                    <div className={s.info_item}>
                    тут будут характеристкики
                    </div>
                </>
                }
                {currentCatalog === 1 &&
                    <Reviews reviews={false}/>
                }
                {currentCatalog === 2 &&
                    <div  dangerouslySetInnerHTML={{__html: item.descr && item.descr[lang]}}></div>
                }
                {currentCatalog === 3 &&
                    <Reviews reviews={true}/>
                }
            </div>
        </div>
    )
}

export default ProductPage
