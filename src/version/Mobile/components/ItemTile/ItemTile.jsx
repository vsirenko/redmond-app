import React, {useState, useEffect} from 'react'
import s from '../../elements/ProductItem/ProductItem.module.scss'
import Button from "../../elements/Buttons/Button";
import sprite from "../../../../assets/icons/icons-sprite.svg";
import PromoIcons from "../../elements/ProductItem/PromoIcons/PromoIcons";
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux'


export default function ProductItem({price, salePrice, id,mainImg, name,onClickAddItem}) {
    const lang = useSelector(state => state.language.default)
    const [findItem, setFindItem] = useState()
    const priceNew = (price && price.replace(/\s/g, ""))  || 0
    const salePriceNew = (salePrice && salePrice.replace(/\s/g, ""))  || 0
    const items = useSelector(state => state.Basket.items )

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
return(
    <div className={s.item}>
                    <span className={s.wr}>
                        <span className={s.wish}>
                            <svg className={s.icon}>
                                <use href={sprite + '#i-wish'}/>
                        </svg>
                    </span>
                    <Link to={`/item/${id}`} className={`${s.wrItems} ${Number(salePriceNew) > 0 ? s.icon : s.wrImage}`}>
                        <img className={s.image} src={`https://polaris-shop.com.ua/imgcache/medium/${id}/small/${mainImg}`} alt={mainImg}/>
                        <PromoIcons promoIcon={Number(salePriceNew) > 0 && 'stock'}/>
                    </Link>
                    </span>
                    <Link to={`/item/${id}`} className={s.title}>
                        {name && name[lang]}
                    </Link>
                    {(Number(priceNew) > 0 && Number(salePriceNew) > 0) &&
                                        (<>
                                            <span className={s.price}>
                                                <span className={s.old}>
                                                    <span>{price}</span>
                                            </span>
                                            <span className={s.new}>
                                                <span>{salePrice}</span>
                                            </span>
                                            </span>
                                        </>
                                        )}
                    {Number(salePriceNew) === 0 && <span className={s.price}><span className={s.new}><span>{price}</span></span></span> }
                
                    <span className={s.btnWr}>
                    {findItem ? <Button class={s.grey} title={'В корзине'} /> :  <Button title={'Купить'} onClick={onAddItem}/>}
                    
                    </span>
                </div>
)
}