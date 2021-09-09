import React, {useState} from "react";
import './style.scss'
import s from './MainSlider.module.scss'


export function MainSlider() {

    const sliderData = [
        {img: 'https://i.postimg.cc/LXbXnmw3/rb.jpg'},
        {img: 'https://i.postimg.cc/4xkNj4LT/slide-2.jpg'},
        {img: 'https://i.postimg.cc/pLfXvN45/slide-3.jpg'},
        {img: 'https://i.postimg.cc/TPT2Y7v7/slide-4.jpg'},
    ]
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);



    const [currentSlide, setCurrentSlide] = useState(0)
    const length = sliderData.length

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
    }



    const handlerTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
        console.log(e.targetTouches[0].clientX);
    }
    const handleTouchMove = (e) => {
        setTouchEnd(e.nativeEvent.changedTouches[0].clientX);
        console.log(e.nativeEvent.changedTouches[0].clientX);
    }
    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 20) {
            nextSlide()
            
        }
    
        if (touchStart - touchEnd < -20) {
            prevSlide()
        }
    }

    return (
        <>
            <div className={s.banner} onTouchStart={e =>  handlerTouchStart(e)} onTouchEnd={e => {
                handleTouchMove(e)
                handleTouchEnd()
            }}>
                {sliderData.map(({img}, index) => {
                    return (
                        <img className={`${s.slide} ${index === currentSlide && 'activeSlide'}`} src={img} alt={index} key={index}/>
                    )
                })}

            </div>
        </>
    );
}