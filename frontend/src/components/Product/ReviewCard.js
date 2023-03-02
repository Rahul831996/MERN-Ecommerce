import React from 'react'
import './ReviewCard.css'
import { Rating } from '@material-ui/lab';
import ProfilePng from '../../images/Profile.png'

const  ReviewCard = ({ review }) => {
    const options = {
        value: review.rating,
        readOnly: true,
        precision: 0.5,
      };
  return (
    <div className='reviewCrad'>
        <img src={ProfilePng} alt="user" />
        <p>{review.name}</p>
        <Rating {...options}/>
        <span className='reviewCardComment'>{review.comment}</span>
    </div>
  )
}

export default ReviewCard;
