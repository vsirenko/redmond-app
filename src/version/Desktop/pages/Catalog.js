import React, {useState, useEffect} from 'react'
import Basket from '../components/Basket/Basket'
import Header from '../components/Header/Header'
import LeftNav from '../components/Navigation/LeftNav/LeftNav'
import s from './Main.module.scss'
import {useParams} from 'react-router-dom'
import { getItems } from '../../../actions/Api'
import ItemTilePreloader from '../components/Preloader/ItemTilePreloader'
import ItemTile from '../components/ItemTile/ItemTile.jsx'
import {addToBasketThunk} from '../../../actions/BasketThunk'
import{useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import Pager from '../components/Pager/Pager'

function Catalog() {
    const lang = useSelector(state => state.language.default)
    const { id } = useParams();
    const [items, setItems] = useState([])
    const [pagination, setPagination] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const {page} = useParams()

    useEffect(() => {
        setItems([])
        getItems(id, page || 1).then(res => {
            setItems(res.items)
            setPagination(res.pagination)
        })
    }, [id, page])

    const dispatch = useDispatch()
    const  handleAddItemToCart = (obj) => {
        dispatch(addToBasketThunk(obj))
    }

    const pages = Math.ceil(pagination.total / 13) + 1
    
    const onSelectPage = (currPage) => {
        setCurrentPage(currPage)
    }

    return (
        <>
        <Header />
        <LeftNav />
        <div className={s.wr}>
            
            <div className={s.header}>
                <h1 className={s.title}>{items[0] && items[0].categoryName[lang]}</h1>
                <div className={s.page_setings}>
                        
                <div className={s.select__page}>
                <span> Товаров на странице </span>
                <select className={s.select}>
                    <option defaultValue='40'>40</option>
                </select>
            </div>

            <div className={s.sort__item}>
            <span> Сортировка </span>
            <select className={s.select}>
                <option defaultValue='По популярности'> По популярности</option>
                <option defaultValue='По популярности'> По популярности</option>
                <option defaultValue='По популярности'> По популярности</option>
                <option defaultValue='По популярности'> По популярности</option>
            </select>
            </div>
                </div>
            </div>
            
             
            
           
            <div className={s.items}>
                {!items.length ? <ItemTilePreloader /> : items.map((item, key) => {
                    return(
                        <ItemTile 
                        key={key} 
                        id={item.id} 
                        mainImg={item.mainImg} 
                        name={item.name} 
                        price={item.price} 
                        salePrice={item.salePrice}
                        onClickAddItem={handleAddItemToCart}
                        />
                    )
                })}
               
            </div>
          <Pager allPages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} pagination={pagination} onSelectPage={onSelectPage} />
        </div>
        <Basket />   
        </>
    )
}

export default Catalog
