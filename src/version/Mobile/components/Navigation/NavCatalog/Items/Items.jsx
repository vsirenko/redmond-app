import React, {useEffect, useState} from "react";
import s from "./Items.module.scss"
import {Link} from "react-router-dom";
import {getCatalog} from "../../../../../../actions/Api";


export default function Items() {


    const [nav, setNav] = useState({items: []})

    useEffect(() => {
        getCatalog().then(respons => setNav(respons))
    }, [])


    return nav.items.map(({level, id, name, iconPath}) => {
            return (
                level === 1 &&
                <>
                    <Link to="#" className={s.item} key={id}>
                        <span className={s.wr}>
                            <span className={s.wrImage}>
                                <img src={`https://polaris-shop.com.ua/${iconPath}`}
                                     className={s.img} alt=""/>
                            </span>
                            <span className={s.title}>
                                {name.ru}
                            </span>
                        </span>
                    </Link>
                    
                </>
            )
        }
    )

}