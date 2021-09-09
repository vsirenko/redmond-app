import React from 'react'
import DesktopProfile from "./icons/DesktopProfile";
import DesktopCompare from "./icons/DesktopCompare";
import DesktopWish from "./icons/DesktopWish";
import DesktopBasket from "./icons/DesktopBasket";
import DesktopSearch from "./icons/DesktopSearch";
import s from './UserBar.module.scss'


export default function UserBar() {
return(
    <nav className={s.nav}>   
        <DesktopSearch />
        <DesktopProfile/>
        <DesktopCompare/>
        <DesktopWish/>
        <DesktopBasket/>
    </nav>
)
}