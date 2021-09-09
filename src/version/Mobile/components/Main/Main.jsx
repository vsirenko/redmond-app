import React from 'react'
import s from './Main.module.scss';
import Index from "./Index/Index";
import Catalog from "../../pages/Catalog/Catalog";
import ProductPage from "./ProductPage/ProductPage";
import { Route, Switch } from 'react-router-dom';

export default function Main() {
    return (
        <div className={s.wr}>

            <Switch >
            {/* <Route path='/' exact render={() =>
                <Index/>
            }/> */}
            <Route  path='/catalog/:slug/:id'  render={() => <Catalog />}/>
            {/* <Route render={() => <Index />} /> */}

            </Switch>

        </div>
    )
}