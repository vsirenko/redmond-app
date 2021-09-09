import React, { useEffect, useRef, useState} from 'react'
import s from './MainBanner.module.scss'
import sprite from '../../../../assets/icons/icons-sprite.svg'

const images = [
    {
        'id': 0,
        'src': 'https://i.postimg.cc/43DjWMDQ/redmond-d.jpg'
    },
    {
        'id': 1,
        'src': 'https://i.postimg.cc/W3pDHmhW/image.png'
    },
    {
        'id': 2,
        'src': 'https://i.postimg.cc/pr4prgk4/image.png'
    },
    {
        'id': 3,
        'src': 'https://i.postimg.cc/5tgyLHnw/image.png'
    }
]


export default function MainBanner() {

    const targetRef = useRef();
    const [width, setWidth] = useState(0);
    const [currentImg, setCurrentImg] = useState(0)
    const [transform, setTransform] = useState(0)

    useEffect(() => {
        setWidth(targetRef.current.offsetWidth)
        const resize = () => {
            if(targetRef.current) {
                setWidth(targetRef.current.offsetWidth)
            }
        }
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize)
    },[])

    useEffect(() => {
        const interval = setInterval(() => {
            chengeImage()

        }, 5000)
        return () => clearInterval(interval)
    })

    const chengeImage = () => {
        images[currentImg + 1] ? setCurrentImg(currentImg + 1) : setCurrentImg(0)
        if(images[currentImg + 1]) {
            setTransform(transform - width - 30)
        }
        if (!images[currentImg + 1]) {
            setTransform(0)
        }
    }

    const clickLeft = () => {
        if(currentImg === 0) {
            const result = images.length * - width
            setTransform(result + width - 45)
            setCurrentImg(images.length - 1)
        } else  {
            setTransform(transform + width + 15)
            setCurrentImg(currentImg - 1)
        }
    }

    const clickRight = () => {
        images[currentImg + 1] ? setCurrentImg(currentImg + 1) : setCurrentImg(0)
        if(images[currentImg + 1]) {
            setTransform(transform - width - 15)
        }
        if (!images[currentImg + 1]) {
            setTransform(0)
        }
    }

    return(
        <>
            <div className={s.banner} ref={targetRef}>
                <div className={s.left}>
                    <svg className={`${s.icon} `} onClick={clickLeft} >
                        <use href={sprite + '#i-arrow-d-gallery'}/>
                    </svg>
                </div>

                <div className={s.wr} style={{transform:  `translateX(${transform}px)`}}>
                    {images.map((items, key)=>{
                        return <img key={key} src={items.src} alt={items.src} />
                    })}
                </div>
                <div className={s.right}>
                    <svg className={`${s.icon} ${s.rotate}`} onClick={clickRight} >
                        <use href={sprite + '#i-arrow-d-gallery'} />
                    </svg>
                </div>
                <div className={s.infoWr}>
                    <div className={s.items}>
                        {images.map((items, key) => {
                            return <div key={key} className={`${s.circle} ${currentImg === key ? s.active : ''}`}> </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}