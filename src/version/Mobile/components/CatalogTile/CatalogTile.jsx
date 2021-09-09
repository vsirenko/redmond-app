import React from 'react'
import s from './CatalogTile.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

function CatalogTile({name,iconPath, id ,setcurrentCatalog,setSubCatalog,sourceId}) {
    const lang = useSelector(state => state.language.default)

    return (
        <div className={s.item} onClick={() => {
            setcurrentCatalog && setcurrentCatalog(id)
            setSubCatalog && setSubCatalog(true)
        }}>
            <span className={s.wr}>
                <span className={s.wrImage}>
                    <img src={`https://polaris-shop.com.ua/${iconPath}`} className={s.img} alt=""/>
                </span>
                <span className={s.title}>
                {name[lang]}
                </span>
            </span>
        </div>
    )
}

export default CatalogTile
