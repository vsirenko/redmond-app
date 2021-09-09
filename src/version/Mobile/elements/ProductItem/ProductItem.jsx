import React, {useState, useEffect} from 'react'
import s from './ProductItem.module.scss'
import Button from "../Buttons/Button";
import sprite from "../../../../assets/icons/icons-sprite.svg";
import PromoIcons from "./PromoIcons/PromoIcons";
import {Link} from "react-router-dom";
import { getItems } from '../../../../actions/Api';
import {useSelector} from 'react-redux'


export default function ProductItem({stock}) {

    const lang = useSelector(state => state.language.default)
    const [items, setItems] = useState([])
    const id = 112;
    useEffect(() => {
        getItems(id).then(res => setItems(res.items))
    }, [])

    

    return(
       items.map((item, key)=>{
        const price = (item.price && item.price.replace(/\s/g, ""))  || 0
        const salePrice = (item.salePrice && item.salePrice.replace(/\s/g, ""))  || 0
            return(
                <div className={s.item} key={key}>
                    <span className={s.wr}>
                        <span className={s.wish}>
                            <svg className={s.icon}>
                                <use href={sprite + '#i-wish'}/>
                        </svg>
                     </span>
                    <Link to={`catalog/${item.id}`} className={`${Number(salePrice) > 0 ? s.icon : s.wrImage}`}>
                        <img className={s.image} src={`https://polaris-shop.com.ua/imgcache/medium/${item.id}/small/${item.mainImg}`} alt={items.mainImg}/>
                        <PromoIcons promoIcon={Number(salePrice) > 0 && 'stock'}/>
                    </Link>
                    </span>
                    <Link to={`catalog/${id}`} className={s.title}>
                        {item.name && item.name[lang]}
                    </Link>
                    {(Number(price) > 0 && Number(salePrice) > 0) &&
                                        (<>
                                            <span className={s.price}>
                                                <span className={s.old}>
                                                    <span>{item.price}</span>
                                            </span>
                                            <span className={s.new}>
                                                <span>{item.salePrice}</span>
                                            </span>
                                            </span>
                                        </>
                                        )}
                    {Number(salePrice) === 0 && <span className={s.price}><span className={s.new}><span>{item.price}</span></span></span> }
                
                    <span className={s.btnWr}>
                        <Button title={'Купить'} />
                    </span>
                </div>
            )
       })
    )
    // return items.map(({id,title,cover,priceOld,priceNew,promoIcon}) => {

    //     const havePromo = promoIcon;
    //     const promo = s[havePromo]

    //     return (
    //         <div className={s.item} key={id}>
    //             <span className={s.wr}>
    //                 <span className={s.wish}>
    //                     <svg className={s.icon}>
    //                         <use href={sprite + '#i-wish'}/>
    //                     </svg>
    //                 </span>
    //                 <Link to={`catalog/${id}`} className={`${s.wrImage} ${havePromo ? promo : null}`}>
    //                     <img className={s.image} src={cover} alt={title}/>
    //                     <PromoIcons promoIcon={promoIcon}/>
    //                 </Link>
    //             </span>
    //             <Link to={`catalog/${id}`} className={s.title}>
    //                 {title}
    //             </Link>
    //             <span className={s.price}>
    //                 <span className={s.old}>
    //                     <span>{priceOld}</span>
    //                 </span>
    //                 <span className={s.new}>
    //                     <span>{priceNew}</span>
    //                 </span>
    //             </span>
    //             <span className={s.btnWr}>
    //                 <Button title={'Купить'} />
    //             </span>
    //         </div>
    //     )
    // });
}