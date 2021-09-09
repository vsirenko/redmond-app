import React, {useState, useEffect} from 'react'
import s from './LeftNav.module.scss'
import Tile from './Tile/Tile'
import {getCatalog} from '../../../../../actions/Api'
import { Link } from 'react-router-dom'

export default function LeftNav () {

  const [nav,setNav] = useState({items:[]})
  const [currentCatalog, setCurrentCatalog] = useState(0)
  const [show, setShow] = useState(false)

  
  const mouseEnter = () => {
    setShow(true)
  
  }
  const mouseLeave = () => {

    setShow(false)
  }
  useEffect(()=> {
      getCatalog().then(respons => setNav(respons))
 }, [])


    return(
      <>
      <nav className={s.left__nav} onMouseLeave={mouseLeave}>
       {nav.items.map((items, key)=> {
                    return(
                        <React.Fragment key={key}>
                        {items.level === 1 && (
                        <div onMouseEnter={() => {
                        mouseEnter()
                        setCurrentCatalog(items.id)
                        }}>
                        <Tile {...items} /> 
                        </div>
                        )}
                        </React.Fragment>
                        )
                })}

        </nav>
        {show &&
          <nav className={s.shadow} >
                <div className={`${s.navContent}`} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <div className={s.wr}>
                {nav.items.map((items, key)=> {
                  return(
                    <React.Fragment key={key}>
                        {items.parentId === currentCatalog &&  
                          <>  
                          <Link to={`/category/${items.slug}/${items.sourceId}/page/`} onClick={() => setShow(false)}>
                            <Tile   {...items}/> 
                          </Link>
                        </>
                        }
                        </React.Fragment>
                  )
                })}
                </div>
                </div>
        </nav>  
        }
       
      </>
    );
}