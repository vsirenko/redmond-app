import React from 'react'
import s from '../../pages/ProductPage/ProductPage.module.scss'
import sprite from '../../../../assets/icons/icons-sprite.svg'


function Image({images,pathToSmallImg, actions}) {
    const imageStore = images && Object.keys(images)
    const [state, setState] = React.useState(0)
    const [transform, setTransform] = React.useState(0)
    const [touchStart, setTouchStart] = React.useState(0);
    const [touchEnd, setTouchEnd] = React.useState(0);

    const selectImage = (id) => {
        setState(id)
    }
    const chengeImage = () => {
         imageStore[state + 1] ? setState(state + 1) : setState(0)
        
    }
    const swipeUp = () => {
       if(state === 0) {
            const result = (imageStore.length - 1) * +50
           setTransform(result)
           setState(imageStore.length - 1)
       } else  {
           setTransform(transform - 50)
           setState(state - 1)
       }
    }
    const swipeDown = () => {
        if (imageStore[state +1]) {
        setTransform(transform + 50)
        return setState(state + 1)
        }
        if (!imageStore[state + 1]) {
        setTransform(0)
        return setState(0)
        }
}

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    }
    const handleTouchMove = (e) => {
        setTouchEnd(e.nativeEvent.changedTouches[0].clientX);
    }
    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 20) {
            swipeDown()
        }
        if (touchStart - touchEnd < -20) {
            swipeUp()
        }
    }
    return (
        <>
            {images && Object.keys(images).map((item, key)=> {
                        return(
                            <React.Fragment key={key}>
                                {state === key &&  <img onTouchStart={e => handleTouchStart(e)} onTouchEnd={e => {
                                    handleTouchMove(e)
                                    handleTouchEnd()
                                }} key={key}  src={`https://polaris-shop.com.ua/${pathToSmallImg}${images[item].path}`} alt={pathToSmallImg}/>}                 
                            </React.Fragment>
                        )
            })}
            <div className={s.slider}>
            <svg className={`${s.icon}`} onClick={() => {swipeUp()}}>
                        <use href={sprite + '#i-arrow-d-gallery'}/>
            </svg>
            <div className={s.slids}>
                <div className={s.wrSlider}    onTouchEnd={e => console.log(e)} style={{transform:  `translateX(${-transform}px)`}}>
                {images && Object.keys(images).map((item, key) => {
                    return(
                        <img 
                        className={`${s.sliderImg} ${state === key && s.sliderImgActive}`} 
                        key={key}  
                        src={`https://polaris-shop.com.ua/${pathToSmallImg}${images[item].path}`} 
                        alt={pathToSmallImg}
                        onClick={() => setState(key)}
                        />
                    )
                })}
                </div>
            </div>
            <svg className={`${s.icon} ${s.rotate}`}onClick={() => {
                    chengeImage()
                    swipeDown()
                    }}>
                        <use href={sprite + '#i-arrow-d-gallery'}/>
            </svg>
            </div>
        </>
    )
}

export default Image
