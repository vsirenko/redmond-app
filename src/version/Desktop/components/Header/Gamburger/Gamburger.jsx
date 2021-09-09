import React, { useState} from 'react';
import s from './Gamburger.module.scss';
import sprite from '../../../../../assets/icons/icons-sprite.svg';
import CatalogPopUp from '../../PopUps/CatalogPopUp';
import useClickOutside from '../../../../../utils/MissClick';

// import PopUpNavigation from '../../Navigation/PopUpNavigation/PopUpNavigation';


function Gamburger() {

    const [popUpState, setPopUpState] = useState(false)
    const ref = useClickOutside(false, () => setPopUpState(false))
    
    return(
        <div className={s.catalog} ref={ref}>
                <svg className={s.icon} onClick={() => {setPopUpState(!popUpState)}}>
                    <use href={sprite + '#i-hamburger'}/>
                </svg>
              <CatalogPopUp  setPopUpState={setPopUpState} popUpState={popUpState} />
           
        </div>
    );
    
}

export default Gamburger;