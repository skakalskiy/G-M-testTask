import React from 'react';
import data from '../../data/data.json';

import './Card.scss';


//анімації не робив, бо скоро виключать світло в мене, я просто не встигаю.

const Card = () => {
  return (
    <div className='card'>
      {data.map((item, index) => (
        <div key={index} className='card__item'>
            <div className='card__item-img'> 
                <img src={item.image} alt="" />
            </div>
            <h2>{item.title}</h2>
            <ul>
                {Object.values(item.list).map((text, idx) => (
                    <li key={idx}>{text}</li>
                ))}
            </ul>
            <div className='card__item-link'>
                <a href="https://www.youtube.com/watch?v=nbnTVSsdF0U">{item.link}</a>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
