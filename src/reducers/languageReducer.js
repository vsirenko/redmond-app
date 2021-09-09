import { loadLS } from "../utils/LocalStore";
const name = 'language'
const initialState = {
    default: !!loadLS(name).length ? loadLS(name) : 'ru'
}
const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'

export default function  languageReucer (state = initialState, action) {
    switch (action.type) {
        case CHANGE_LANGUAGE: { return{...state, default: action.payload} }
        default:
            return state;
    }
}