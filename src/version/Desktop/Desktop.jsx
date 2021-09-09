import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ScrollToTop from '../../utils/ScrollToTop'
import s from './Desktop.module.scss'
import Catalog from './pages/Catalog'
import Main from './pages/Main'
import ProductPage from './pages/ProductPage'


function Desktop() {
    return (
    <main className={s.wr}>
        <div className={s.content}>
            <ScrollToTop />
            <Switch>
                <Route exact path='/' render={()=><Main /> } />
                <Route path='/category/:slug/:id/page/:page?'  render={() => <Catalog />}/>
                <Route exact path='/catalog/:id' render={()=><ProductPage />}/>
                <Route render={() => <Main />} />
                


            </Switch>
        </div>
    </main>
    )
}

export default Desktop
