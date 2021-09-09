import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from "react-router-dom";
import s from './Pager.module.scss'

function Pager({allPages, pagination, setCurrentPage, currentPage}) {
    const [pages, setPages] = useState([])
    const { page } = useParams()
    const history = useHistory();

    useEffect(()=> {
        let arr = []
            for (let i = 1; i < allPages; i++) {
                let result = arr.push(i)
            }
            setPages(arr)
    }, [pagination])
    const changePage = page => {
        history.push(`${page}`)
    }



    return (
        <div className={s.pagination}>
        {pagination.total > 13 && 
        <>
        {currentPage === 1 ? null : <div className={s.arrow} onClick={() => {changePage(currentPage - 1)
        setCurrentPage(currentPage - 1)
        }}> 	&lt; </div>}
        {
            pages.map((item,key)=> {
                return(
                    <div key={key}>
                            <span className={`${s.paginationNumber} 
                            ${(page ? page : 1) == item && s.active }`}
                            onClick={() => {
                                setCurrentPage(item)
                                changePage(item)
                                }}
                            >
                                {item}
                            </span>
                        </div>
                    )
                    })
                }
                {pages.length == currentPage ?  null : <div className={s.arrow} onClick={() => {changePage(currentPage + 1)
                    setCurrentPage(currentPage + 1)
                }} > 	&gt; </div> }
        </>
        }    
        </div>
    )
}

export default Pager
