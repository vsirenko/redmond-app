
import React, {useEffect, useState} from 'react'
import s from './Catalog.module.scss'
import H3 from "../../elements/Titles/H3";
import SortAndFilterBar from "../../elements/SortAndFilterBar/SortAndFilterBar";
import { getItems } from '../../../../actions/Api';
import { useParams } from 'react-router-dom';
import ItemTile from '../../components/ItemTile/ItemTile'
import{useDispatch, useSelector} from 'react-redux'
import { addToBasketThunk } from '../../../../actions/BasketThunk';
import Pager from '../../components/Pager/Pager';
import { useTitle } from '../../../../utils/UseTitle';

export default function Catalog() {
    const [items, setItems] = useState([])
    const {id} = useParams()
    const lang = useSelector(state => state.language.default)
    const [pagination, setPagination] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const {page} = useParams()

    useEffect(()=> {
        getItems(id, page || 1).then(res => {
            setItems(res.items)
            setPagination(res.pagination)
        })
        
    },[id, page])


    const dispatch = useDispatch()
    const  handleAddItemToCart = (obj) => {
        dispatch(addToBasketThunk(obj))
    }
    
    const pages = Math.ceil(pagination.total / 13) + 1
    
    const onSelectPage = (currPage) => {
        setCurrentPage(currPage)
    }
    useTitle(items.length > 0 && items[0].categoryName[lang])
    return (
        <div className={s.wr}>

            <H3 title={items.length > 0 && items[0].categoryName[lang]}/>
            <SortAndFilterBar/>
            <div className={s.wrProducts}>
            {items.map(item => 
                <ItemTile onClickAddItem={handleAddItemToCart} {...item}/>
            )}
            </div>
            <Pager allPages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} pagination={pagination} onSelectPage={onSelectPage} />
        </div>
    )
}