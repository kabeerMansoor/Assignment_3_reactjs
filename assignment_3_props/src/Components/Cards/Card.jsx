import React from 'react'
import style from './Card.module.css'

const Card = ({title,price,rating,imageSrc,desc}) => {
  return (
    <>
        <div className={style.mainDiv}>
            <div>
                <img src={imageSrc} alt='image-card' className={style.imgStyle}/>
            </div>
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <p className={style.priceStyle}>Price: {price}</p>
                <p className={style.ratingStyle}>Ratings: {rating}</p>
            </div>
        </div>
    </>
  )
}

export default Card