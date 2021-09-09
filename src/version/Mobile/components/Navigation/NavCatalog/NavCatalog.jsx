import React from "react";
import s from "./NavCatalog.module.scss"
import Items from "./Items/Items";



export default function NavCatalog({state}) {

    return (
        <div className={`${s.nav} ${state && s.open}`}>
            <Items/>
        </div>
    )

}