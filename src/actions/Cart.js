export const addToBasket = (item) => {
    return {
        type: "ADD_TO_BASKET",
        payload: item
    }
}
export const basketDelete = (id) => {
    return {
        type: "BASKET_DELETE",
        payload: id
    }
}
export const basketChange = (id, quantity) => {
    return {
        type: "BASKET_CHANGE_QUANTITY",
        payload: {id, quantity}
    }
}
export const itemIncrement = (id) => {
    return {
        type: "BASKET_ADD_COUNT",
        payload: {id}
    }
}

export const itemDecrement = (id) => {
    return {
        type: "BASKET_REMOVE_COUNT",
        payload: {id}
    }
}

