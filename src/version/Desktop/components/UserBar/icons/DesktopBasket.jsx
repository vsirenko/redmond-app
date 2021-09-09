import React, {useState, useRef, useEffect} from "react";
import{useSelector} from 'react-redux'
import s from "../UserBar.module.scss"
import sprite from '../../../../../assets/icons/icons-sprite.svg';
import useClickOutside from "../../../../../utils/MissClick";
import BasketPopUp from "../../PopUps/BasketPopUp";


export default function DesktopBasket() {
    const lang = useSelector(state => state.language.default)
    const inBasket = useSelector(state => state.Basket.items)
    const [openBasket, setOpenBasket] = useState(false)
    const ref = useClickOutside(false, ()=> setOpenBasket(false))
    
    return(
        <>
        <div className={s.element} ref={ref}>
        {inBasket.length > 0 && <span className={s.count}>{inBasket.length}</span>}
            <svg className={s.icon} onClick={() => setOpenBasket(!openBasket)}>
                <use href={sprite + '#i-basket'}/>
            </svg>
            <span className={s.title}>{lang === 'ru' ? 'Корзина' : 'Кошик'}</span>
            <BasketPopUp  openBasket={openBasket}/>
        </div>
        </>
        // <div className={s.element} onClick={setStatusBasket} ref={ref} >
        // <PopUpBasket  openBasket={openBasket} setOpenBasket={setOpenBasket}/>
        // {inBasket.length > 0 && <span className={s.count}>{inBasket.length}</span>}
        //     <svg className={s.icon}>
        //         <use href={sprite + '#i-basket'}/>
        //     </svg>
        //     <span className={s.title}>{lang === 'ru' ? 'Корзина' : 'Кошик'}</span>
        // </div>
        
    )
}