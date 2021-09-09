import React, { useEffect, useState } from 'react'
import { getItems } from '../../../../actions/Api'
import { MainSlider } from '../../elements/MainSlider/MainSlider'
import H3 from '../../elements/Titles/H3'
import s from './Main.module.scss'
import ItemTile from '../../components/ItemTile/ItemTile'
import { addToBasketThunk } from '../../../../actions/BasketThunk'
import { useDispatch } from 'react-redux'

function Main() {
    const [items, setItems] = useState([])
    const dispatch = useDispatch()
    const id = 117;
    useEffect(()=> {
        getItems(id, 1).then(res => setItems(res.items))
    }, [])
    const  handleAddItemToCart = (obj) => {
        dispatch(addToBasketThunk(obj))
    }
    
    return (
        <div className={s.mainWr}>
        <MainSlider />
            <H3 title={'Акции'}/>
            <div className={s.wr}>
            {items.map(item => 
                <ItemTile  onClickAddItem={handleAddItemToCart} {...item}/>
            )}
            </div>
        </div>
    )
}

export default Main
