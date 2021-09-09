import React, {Fragment} from 'react'

import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import MainPopUp from './components/PopUps/Main'
import { Route, Switch } from 'react-router-dom';
import Catalog from './pages/Catalog/Catalog';
import ProductPage from './pages/ProductPage/ProductPage';
import PP from './components/Main/ProductPage/ProductPage'
import Checkout from './pages/Checkout/Checkout';


export default function Mobile() {
    return (
        <Fragment>
            <Header/>
            <MainPopUp />
            <Switch>
            <Route path='/' exact render={()=> <Main />} />
            <Route path='/category/:slug/:id/page/:page?' exact render={() => <Catalog />}/>
            <Route path='/item/:id/' exact render={() => <ProductPage />} />
            <Route exact path='/ex' render={() => <PP />} />
            <Route path='/checkout' exact render={() => <Checkout />}/>
            </Switch>
            <Footer/>
        </Fragment>
    );
}
