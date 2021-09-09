import {addToBasket, basketChange} from './Cart'


export const addToBasketThunk = obj => (dispatch, getState) => {
    const basket = getState().Basket
    const findItem = basket.items.find(item => item.id === obj.id)

    if (findItem) {
        dispatch(basketChange(findItem.id, findItem.quantity + 1))
    } else {
        dispatch(addToBasket({...obj, quantity: 1}))
    }
}