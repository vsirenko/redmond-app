import React from 'react'
import s from './Search.module.scss'

function Search() {

    // let history = useHistory();
    // const [itemFound, setItemFound] = React.useState('')
    // const Search = evt => {
    //     if(evt.key === 'Enter')  {    
    //             props.SearchReducerNow(itemFound)
    //             history.push('/search')
    //             evt.target.value = ''          
    // }}
    
    return(
        <div className={s.search}> 
            <input className={s.search__input} type="text"  placeholder='Поиск...' />
        </div>
    );
}

export default Search;