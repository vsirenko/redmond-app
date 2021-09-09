import React from 'react'
import UserBar from '../UserBar/UserBar'
import Gamburger from './Gamburger/Gamburger'
import s from './Header.module.scss'
import Logo from './Logo/Logo'
import Search from './Search/Search'
import NavSystem from '../Navigation/NavSystem/NavSystem'
import{useSelector,useDispatch} from 'react-redux'
import { setLS } from '../../../../utils/LocalStore'

function Header() {
    const lang = useSelector(state => state.language.default)
    const dispatch = useDispatch()
    const name = 'language'
    const selectRu = () => {
        return dispatch({type: 'CHANGE_LANGUAGE', payload: 'ru'})
        
    }
    
    const selectUa = () => {
        return dispatch({type: 'CHANGE_LANGUAGE', payload: 'ua'})
        
    }
    React.useEffect(() => {
        setLS(name, lang)
    }, [lang])
    return (
        <header className={s.header}>
            <div className={s.wr}>
            <Gamburger />
            <Logo />
            <NavSystem />
            <Search />
            <span><span onClick={selectRu}>ru</span>/<span onClick={ selectUa}>ua</span></span>
            <UserBar />
            </div>
        </header>
    )
}

export default Header
