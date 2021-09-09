import React  from "react";
import s from './Mobile.module.scss';
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import Gamburger from "./Gamburger/Gamburger.jsx";


export default function Header() {


    return (
        <header className={s.header}>
            <div className={s.wr}>
                <Gamburger/>
                <Logo/>
                <Search/>
            </div>
        </header>
    )

}

