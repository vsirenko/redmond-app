import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import BasketReducer from './BasketReducers'
import  languageReucer from './languageReducer'
import PopUpReucer from './PopUpReducer';

const reducers = combineReducers({
  Basket: BasketReducer,
  language: languageReucer,
  PopUp: PopUpReucer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
