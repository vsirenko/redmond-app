import { loadLS } from '../utils/LocalStore'

const ADD_TO_BASKET = 'ADD_TO_BASKET'
const BASKET_DELETE = 'BASKET_DELETE'
const BASKET_CHANGE_QUANTITY = 'BASKET_CHANGE_QUANTITY'
const BASKET_ADD_COUNT = 'BASKET_ADD_COUNT'
const BASKET_REMOVE_COUNT = 'BASKET_REMOVE_COUNT'
const name = 'cartItems'


const initState = {
    items:  loadLS(name),
}


export default function SetPopUpState (state = initState, action) {
    switch (action.type) {
        case  ADD_TO_BASKET:  {
          return {...state, items: [...state.items, action.payload]}
        
        }
        case BASKET_DELETE: {
            return {...state, items: state.items.filter(item => item.id !== action.payload)}
        }
        case BASKET_CHANGE_QUANTITY: {
            return {...state, items: state.items.map(item => {
                    if (item.id === action.payload.id) {
                        return  {...item, quantity: action.payload.quantity}
                    }
                    return item
                })}
        }
        case BASKET_ADD_COUNT: {
            return {...state, items: state.items.map(item => {
                    if (item.id === action.payload.id) {
                        return  {...item, quantity: item.quantity + 1  }
                    }
                    return item
                })}
        }
        case BASKET_REMOVE_COUNT: {
            return {...state, items: state.items.map(item => {
                    if (item.id === action.payload.id) {
                        if (item.quantity > 1) {
                            return  {...item, quantity: item.quantity - 1  }
                        }
                    }
                    return item
                })}
        }
           
        default:
            return state;
    }
}