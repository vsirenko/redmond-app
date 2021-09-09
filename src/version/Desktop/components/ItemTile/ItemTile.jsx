import React, {useEffect, useState}  from 'react'
import s from './ItemTile.module.scss'
import sprite from '../../../../assets/icons/icons-sprite.svg'
import Button from '../Button/Button'
import PromoIcons from './PromoIcons/PromoIcon'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function ProductItem({id , mainImg, name, price, salePrice,onClickAddItem}) {

    const items = useSelector(state => state.Basket.items )
    const [findItem, setFindItem] = useState()
    const lang = useSelector(state => state.language.default)
    useEffect(()=>{
        setFindItem(items.find(item => item.id === id))
    }, [items, id])


    const onAddItem = () => {
        const obj = {
            id,
            mainImg,
            name,
            price,
            salePrice
        }
        onClickAddItem(obj)
    }
    const priceToNumb = (price && price.replace(/\s/g, ""))  || 0
    const salePriceToNumb = (salePrice && salePrice.replace(/\s/g, ""))  || 0
    
    return (
        <div className={s.item}>
            <div className={s.itemImage}>
                    <div className={`${Number(salePriceToNumb) > 0 ? s.pIcon : s.imgWr}`}>
                        <PromoIcons  promoIcon={Number(salePriceToNumb) > 0 && 'stock'}/>
                        <img className={s.img} src={`https://polaris-shop.com.ua/imgcache/medium/${id}/small/${mainImg}`} alt={name && name[lang]}/>
                            <div className={s.like}>
                                <svg className={s.icon}>
                                    <use href={sprite + '#i-wish'}/>
                                </svg>
                            </div>
                    </div>
            </div>
            <Link to={`/catalog/${id}`}><div className={s.title}>{name && name[lang]}</div></Link>
            <div className={s.price}>
                {(Number(priceToNumb) > 0 && Number(salePriceToNumb) > 0 ) && 
                    (<>
                    <span className={`${s.price__old} ${s.uah}`}>{Number(priceToNumb)}</span>
                    <span className={`${s.new} ${s.uah}`}>{Number(salePriceToNumb)}</span>
                    </>
                    )}
                {Number(salePriceToNumb) === 0 && <span className={`${s.new} ${s.uah}`}>{Number(priceToNumb)}</span> }

            </div>
            <div className={s.order}>
                {findItem  ? <Button class={s.grey_btn} text={'В корзине'} /> : <Button onClick={onAddItem} text={'В корзину'} />}

            </div>
        </div>
    
    );
}