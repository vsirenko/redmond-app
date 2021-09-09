

import s from "./BuyPanel.module.scss"



export default function BuyPanel() {
    return (
        <>
            <div className={s.bp}>
               <div className={s.price}>
                   <div className={`${s.old} ${s.uah}`}><span>7 999</span></div>
                   <div className={`${s.new} ${s.uah}`}><span>6 650</span></div>
               </div>
            </div>

            <div className={s.buyOneClick}>
                <div className={s.title}>
                    Укажите номер телефона для заказа в 1 клик
                </div>
                <div className={s.form}>
                    <form action="">
                        <input type="text" placeholder={''}/>
                        <input type="button" value={'КУПИТЬ'}/>
                    </form>



                </div>
            </div>
        </>
    )
}