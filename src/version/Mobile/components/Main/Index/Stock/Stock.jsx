import React from 'react'
import s from './Stock.module.scss'

import H3 from "../../../../elements/Titles/H3";
import ProductItem from '../../../../elements/ProductItem/ProductItem';

export default function Stock() {
    return (
        <>

            <H3 title={'Акции'}/>

            <div className={s.wr}>
                <ProductItem />
            </div>


        </>
    )
}