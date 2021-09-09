import React from 'react'
import s from './Tile.module.scss'
import {useSelector} from 'react-redux'


function Tile({tablet,iconPath, name, catalog,onSetCatalog,onCreateSubCatalog, id }) {

    const lang = useSelector(state => state.language.default)

    return (
        <div className={`${tablet ? s.tablet : s.item} ${catalog && s.catalog}`} onClick={() => {
            onSetCatalog && onSetCatalog(id)
            onCreateSubCatalog && onCreateSubCatalog(true)
        }}>
            <img className={s.img}  src={`https://polaris-shop.com.ua/${iconPath}`} alt={name && name[lang]}/>
            <p className={s.title}>{name && name[lang]}</p>
        </div>
    )
}

export default Tile
