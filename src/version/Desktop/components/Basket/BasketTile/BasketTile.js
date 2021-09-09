import React from 'react'
import s from './BasketTile.module.scss'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { basketDelete, itemDecrement, itemIncrement }  from '../../../../../actions/Cart';

function BasketTile(item) {
    const lang = useSelector(state => state.language.default)
    const dispatch = useDispatch()
    const itemDel = (id) => {
        dispatch(basketDelete(id))
    }
    const addItem = (id) => {
            dispatch(itemIncrement(id))
    }
    const removeItem = (id) => {
        dispatch(itemDecrement(id))
    }
    const priceToNumb = (item.price && item.price.replace(/\s/g, ""))  || 0
    const salePriceToNumb = (item.salePrice && item.salePrice.replace(/\s/g, ""))  || 0
    return (
        <div className={s.item}>
                <Link to={`/catalog/${item.id}`}>
                    <div className={s.itemImage}><img className={s.image} src={`https://polaris-shop.com.ua/imgcache/medium/${item.id}/small/${item.mainImg}`} alt={item.mainImg} /></div>
                </Link>
                <div className={s.info}>
                <Link to={`/catalog/${item.id}`}>
                    <div className={s.name}>
                        {item.name && item.name[lang]}
                        { salePriceToNumb > 0 && 
                            <div className={s.action}>
                            {lang === 'ru' ? 'Супер цена' : 'Супер ціна:'}
                            </div>
                        }
                    </div>
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
                <div className={s.closed} onClick={() => itemDel(item.id)}>x</div>
                <div className={s.quantity}>
                    <div className={s.incr} onClick={() => addItem(item.id)}>+</div>
                    <div className={s.count}>{item.quantity}  </div>
                    <div className={s.incr} onClick={() => removeItem(item.id)}>-</div>
                    
                </div>
                </div>
                    
                </div>
    )
}

export default BasketTile
