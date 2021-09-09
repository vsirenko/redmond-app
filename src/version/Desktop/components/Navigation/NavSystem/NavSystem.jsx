import React, {Fragment} from "react";
import s from  './NavSystem.module.scss';

export default function NavSystem() {
    return(
        <Fragment>
                <div className={s.nav}>
                    <a href="/" className={s.link}>Оплата</a>
                    <a href="/" className={s.link}>О компании</a>
                    <a href="/" className={s.link}>Кредит</a>
                    <a href="/" className={s.link}>Акции</a>
                    <a href="/" className={s.link}>Статьи</a>
                    <a href="/" className={s.link}>Контакты</a>
                </div>
        </Fragment>
    );
}

