import React from 'react'
import s from './Reviews.module.scss'

function NotReviews({reviews}) {
    return (
        <div className={s.notReviews}>
            {reviews ? 'Отзывов еще нету, вы можете быть первым!' : 'Вопросов еще нету, вы можете быть первым!'}
        </div>
    )
}

export default NotReviews
