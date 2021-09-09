export const setPopupBasket = (status) => {
    return {
        type: "SET_BASKET",
        payload: status
    }
}
export const setPopupCatalog = (status) => {
    return {
        type: "SET_CATALOG",
        payload: status
    }
}
export const setPopupLogin = (status) => {
    return {
        type: "SET_LOGIN",
        payload: status
    }
}

export const setPopupWish = (status) => {
    return {
        type: "SET_WISH",
        payload: status
    }
}