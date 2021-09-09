import React, {useState, useEffect} from 'react'
import { setPopupCatalog} from '../../../../actions/PopUp'
import useClickOutside from '../../../../utils/MissClick'
import s from './Catalog.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import CatalogTile from '../CatalogTile/CatalogTile'
import { getCatalog } from '../../../../actions/Api'
import { Link } from 'react-router-dom'

function Catalog() {

    const dispatch = useDispatch()
    const popupState = useSelector(state => state.PopUp.catalog)
    const ref = useClickOutside(false, () => dispatch(setPopupCatalog(false)), 'header--popup' )
    const [nav, setNav] = useState({items: []})
    useEffect(() => {
        getCatalog().then(respons => setNav(respons))
    }, [])
    useEffect(()=> {
        setSubCatalog(false)
    }, [popupState])
    const [currentCatalog, setcurrentCatalog] = useState()
    const [subCatalog, setSubCatalog] = useState(false)

    return (
        <div ref={ref} className={`${s.popup} ${popupState && s.active}`}>
            <div className={s.nav}>
                {nav.items.map((item, key) => {
                    return(
                        <>
                        {!subCatalog && item.level === 1 &&
                            <CatalogTile setSubCatalog={setSubCatalog} setcurrentCatalog={setcurrentCatalog} key={key} {...item}/>
                        } 
                        {subCatalog && currentCatalog === item.parentId && 
                            <Link className={s.item} to={`/category/${item.slug}/${item.sourceId}/page/`} onClick={() => dispatch(setPopupCatalog(false))}>
                                <CatalogTile link={true} {...item}/>
                            </Link>
                        }
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Catalog
