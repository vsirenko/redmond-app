const initialState = {
    basket: false,
    catalog: false,
    login: false,
    wish: false,
}
const SET_BASKET = 'SET_BASKET'
const SET_CATALOG = 'SET_CATALOG'
const SET_LOGIN = 'SET_LOGIN'
const SET_WISH = 'SET_WISH'

export default function  PopUpReucer (state = initialState, action) {
    switch (action.type) {
        case SET_BASKET: { return{...state, basket: action.payload} }
        case SET_CATALOG: { return {...state, catalog: action.payload}}
        case SET_LOGIN: { return {...state, login: action.payload}}
        case SET_WISH: { return {...state, wish: action.payload}}
        default:
            return state;
    }
}