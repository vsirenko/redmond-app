import React from 'react'
import BasketPopUp from '../PopUps/Basket'
import Catalog from './Catalog'
import Login from './Login'
import Wish from './Wish'

function Main() {
   
    return (
        <>
        <Catalog /> 
        <BasketPopUp/>
        <Login />
        <Wish />
        </>
    )
}

export default Main
