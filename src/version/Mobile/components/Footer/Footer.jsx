import React from "react";
import s from "./Footer.module.scss"
import UserBar from "../../elements/UserBar/UserBar";


export default function Footer() {
    return(
        <footer className={s.footer}>
            <div className={s.wr}>
                <UserBar/>
            </div>
        </footer>
    )

}