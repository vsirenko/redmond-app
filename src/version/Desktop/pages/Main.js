import React,{useState, useEffect}from 'react'
import { getItems } from '../../../actions/Api'
import MainBanner from '../components/Banner/MainBanner'
import Basket from '../components/Basket/Basket'
import Header from '../components/Header/Header'
import LeftNav from '../components/Navigation/LeftNav/LeftNav'
import ItemTile from '../components/ItemTile/ItemTile'
import s from './Main.module.scss'
import {addToBasketThunk} from '../../../actions/BasketThunk'
import{useDispatch} from 'react-redux'
import ItemTilePreloader from '../components/Preloader/ItemTilePreloader'
function Main() {

    const [items,setItems] = useState([])
    const dispatch = useDispatch()
    const id = 112;
    useEffect(() => {
        getItems(id).then(response => setItems(response.items))
    }, [])
    const  handleAddItemToCart = (obj) => {
        dispatch(addToBasketThunk(obj))
    }
    
    return (
        <>
        <Header />
        <LeftNav />
        <MainBanner />
        <div className={s.wr}>
            <div className={s.items}>
               {!items.length ? <ItemTilePreloader /> : items.map((item, key)=> {
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
        </div>
        <Basket />
        
        </>
    )
}

export default Main
