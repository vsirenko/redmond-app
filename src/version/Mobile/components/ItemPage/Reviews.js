import { logDOM } from '@testing-library/react'
import React, { useState } from 'react'
import Button from '../../elements/Buttons/Button'
import Input from '../Input/Input'
import NotReviews from './NotReviews'
import Rating from './Rating'
import s from './Reviews.module.scss'
import Stars from './Stars'

function Reviews({reviews}) {
    const date = new Date()
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear()
    const fullDate = `${day}.${month}.${year}`

    const [form, setForm] = useState({
        email: '',
        name: '',
        text: '',
        stars: 0,
        data: fullDate
    })
    const [errors, setErrors] = useState({
        email: '',
        name: '',
        text: '',
    })

    const [review, setReview] = useState([])
    const validate = () => {
        let newErrors = {}
        if (form.name.trim().length < 2 || form.name.trim().length > 25) {
            newErrors['name'] = 'Мало символов'
        }
        if(form.text.trim().length < 5 || form.text.trim().length > 250) {
            newErrors['text'] = 'Мало символов или много'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }
    const changeRating = (rating) => {
        setForm({...form, stars: rating})
    }
    const changeHandler = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        validate()
        if(!validate()) return 
        setReview([...review, form])
    }

    return (
        <div className={s.reviews}>
        {review.length === 0 ? <NotReviews reviews={reviews}/> : review.map((item, key) => {
            return(
                <div key={key} className={s.comments}>
                    <div className={s.commentName}>{item.name}<p className={s.data}>{item.data}</p></div>
                    <div><Stars currentValue={item.stars}/></div>
                    <div className={s.commentText}>{item.text}</div>
                </div>
            )
        })}
            <form onSubmit={e => handleSubmit(e)}>
                <p className={s.p}>Введите ваше имя:</p>
                <Input name={'name'} value={form.name} onChange={changeHandler} className={s.input} placeholder='Введите ваше имя'/>

                <p className={s.p}>Введите ваше email:</p>
                <Input name='email' value={form.email} onChange={changeHandler} className={s.input} placeholder='Введите ваше email'/>
                <p className={`${s.p} ${s.rating}`}>
                    <p>Ваш отзыв:</p>
                    {reviews === false ? '' : <p className={s.score}>Оцените товар:  <Rating rating={changeRating}/> </p>}
                </p>
                
                <textarea name='text' onChange={e => changeHandler(e)} className={s.bigInput} placeholder='Ваш отзыв'></textarea>
                <div className={s.send}>
                    <Button  title='Оставить отзыв'/>
                </div>
                
            </form>
        </div>
    )
}

export default Reviews
