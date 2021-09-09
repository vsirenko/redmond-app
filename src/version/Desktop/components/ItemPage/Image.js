import React from 'react'
import s from './Image.module.scss'
import sprite from '../../../../assets/icons/icons-sprite.svg'

function ItemImage({images,pathToSmallImg, price}) {

    // const imageStore =  useSelector(state => state.Image.images)
    const imageStore = images && Object.keys(images)
    const [state, setState] = React.useState(0)
    const [transform, setTransform] = React.useState(0)

    const selectImage = (id) => {
        setState(id)
    }
    const chengeImage = () => {
         imageStore[state + 1] ? setState(state + 1) : setState(0)
        
    }
    const swipeUp = () => {
       if(state === 0) {
            const result = (imageStore.length - 1) * -130
           setTransform(result)
           setState(imageStore.length - 1)
       } else  {
           setTransform(transform + 140)
           setState(state - 1)
       }
    }
    const swipeDown = () => {
        if (imageStore[state +1]) {
        setTransform(transform -130)
        return setState(state + 1)
        }
        if (!imageStore[state + 1]) {
        setTransform(0)
        return setState(0)
        }
}

    const salePrice = (price && price.replace(/\s/g, ""))  || 0

    return (
        <div className={s.images}>
        
            {Number(salePrice) > 0 && <div className={s.action}>супер цена</div>}
            <div className={s.sliderNav}>
                    <svg className={`${s.icon} ${s.rotate}`} onClick={() => {swipeUp()}}>
                        <use href={sprite + '#i-arrow-d-gallery'}/>
                    </svg>

                <div className={s.nav}>
                    <div className={s.wr} style={{transform:  `translateY(${transform}px)`}}>
                    {images && Object.keys(images).map((item, key)=> {
                        return(
                            <React.Fragment key={key}>
                            <div className={`${s.navItem} ${key === state ? s.active : ''}`} >
                                <img  
                                className={s.navImg} 
                                src={`https://polaris-shop.com.ua/${pathToSmallImg}${images[item].path}`}
                                onClick={() => {selectImage(key) }}
                                alt={pathToSmallImg}
                                />
                            </div>
                            </React.Fragment>
                        )
                    })}
                    </div>

                </div>
                <svg className={`${s.icon} `} onClick={() => {
                    chengeImage()
                    swipeDown()
                    }}>
                        <use href={sprite + '#i-arrow-d-gallery'}/>
                    </svg> 
            </div>
            <div className={s.mainImg}>
            {images && Object.keys(images).map((item, key)=> {
                        return(
                            <React.Fragment key={key}>
                                {state === key &&  <img key={key}  src={`https://polaris-shop.com.ua/${pathToSmallImg}${images[item].path}`} alt={pathToSmallImg}/>}                 
                            </React.Fragment>
                        )
                    })}
            </div>
        </div>
                   
    )
}

export default ItemImage

