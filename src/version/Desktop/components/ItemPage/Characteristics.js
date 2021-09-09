import React, {Fragment, useState} from 'react'
import Button from '../Button/Button.jsx';
import Stars from './Stars';
import s from '../../pages/ProductPage.module.scss'
import {useSelector} from 'react-redux'

function Characteristics({descr}) {
    const lang = useSelector(state => state.language.default)
    const [isActive, setIsActive] = useState(0);
    const catalog = [{ru: 'Характеристики', ua: 'Характеристики'},{ru: 'Описание', ua: 'Опис'},{ru: 'Отзывы', ua: 'Відгуки'},{ru: 'Вопросы и ответы', ua: 'Питання та відповіді'}]

    return (
        <>
       
            <div className={s.info}>
            {catalog.map((item, key)=> {
                return(
                    <div className={`${s.title} ${(key === isActive ? s.active : '')}`}
                        key={key}
                        onClick={() => {setIsActive(key)}}>
                        {item[lang]}
                    </div>
                )
            })}
            </div>

            <div className={s.info_body}> 
            <h3>{catalog[isActive][lang]}</h3>
                {isActive === 0 &&
                <div className={s.info_item}>
                    тут будут характеристкики
                </div>
                }
                {isActive === 1 &&
                <div>
                    <div  dangerouslySetInnerHTML={{__html: descr && descr[lang]}}></div>
                </div>
                }
                {isActive === 2 &&
                <div className={s.content}> 
                    <div className={`${s.side} ${s.rewievs}`}> Отзывов нету :(  </div>


                    <div className={s.side}>    
                        <div className={s.sideWr}>
                            <p>{lang === 'ru' ? 'Ваш отзыв:':'Ваш відгук:'}</p>
                            <div className={s.ratings}>
                                <p>{lang === 'ru' ? 'Ваша оценка товара:':'Ваша оцінка товару:'}</p>
                                <Stars />
                            </div>
                        </div>
                        <input className={s.inputRewiev}></input>
                        <div className={s.userInfo}>
                            <div className={s.nameInp}><p>{lang === 'ru' ? 'Ваше Имя':'Ваше ім`я'}</p><input ></input></div>
                        <div className={s.emailInp}><p>{lang === 'ru' ? 'Ваш E-mail':'Ваш E-mail'}</p><input ></input></div>        
                        </div>
                        <div className={s.submit}>
                            <Button class={s.button} text={lang === 'ru' ? 'Оставить отзыв':'Залишити відгук'}/>
                        </div>
                    </div>   
                </div>
                }
                {isActive === 3 && 
                    <div className={s.content}> 
                    <div className={`${s.side} ${s.rewievs}`}> Вопросов нету :(  </div>


                    <div className={s.side}>    
                        <div className={s.sideWr}>
                            <p>{lang === 'ru' ? 'Ваш отзыв:':'Ваш відгук:'}</p>
                        </div>
                        <input className={s.inputRewiev}></input>
                        <div className={s.userInfo}>
                            <div className={s.nameInp}><p>{lang === 'ru' ? 'Ваше Имя':'Ваше ім`я'}</p><input ></input></div>
                        <div className={s.emailInp}><p>{lang === 'ru' ? 'Ваш E-mail':'Ваш E-mail'}</p><input ></input></div>        
                        </div>
                        <div className={s.submit}>
                            <Button class={s.button} text={lang === 'ru' ? 'Оставить отзыв':'Залишити відгук'}/>
                        </div>
                    </div>   
                </div>
                }
            </div>
        </>
    

    )
}

export default Characteristics
