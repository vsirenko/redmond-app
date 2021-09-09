import s from "./Titles.module.scss"
import React from "react";



export default function H3({children,title,classLocal}) {
    return(
        <h3 className={`${s.h3} ${classLocal}`}>
            {title}
            {children}
        </h3>
    )

}