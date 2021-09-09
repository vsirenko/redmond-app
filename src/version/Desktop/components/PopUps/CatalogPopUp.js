import React, {useState, useEffect} from 'react'
import s from './CatalogPopUp.module.scss'
import Tile from '../Navigation/LeftNav/Tile/Tile'
import { getCatalog } from '../../../../actions/Api'
import { Link } from 'react-router-dom'

function CatalogPopUp({popUpState,setPopUpState}) {
    const [nav,setNav] = useState({items:[]})
    const [currentCatalog, setCurrentCatalog] = useState()
    const [subCatalog, setSubCatalog] = useState(false)
    useEffect(()=> {
        getCatalog().then(respons => setNav(respons))
    }, [])

    useEffect(()=> {
        setSubCatalog(false)
    }, [popUpState])
   
    return (
        <div  className={`${s.popup} ${popUpState ? s.active : ''}`}>
            <div className={s.wr}>
            {nav.items.map((item, key)=>{
                return(
                    <React.Fragment key={key}>
                    {!subCatalog && item.level === 1 &&
                    <Tile onCreateSubCatalog={setSubCatalog} onSetCatalog={setCurrentCatalog} {...item}/>
                    }
                    {subCatalog && item.parentId === currentCatalog && 
                        <Link className={s.fix} to={`/category/${item.slug}/${item.sourceId}/page/`} onClick={() => setPopUpState(false)}>
                            <Tile tablet={true}  {...item}/> 
                        </Link>
                    }
                    </React.Fragment>
                )
            })}
            </div>
        </div>
    )
}

export default CatalogPopUp
