import React from 'react';

import './styles/Card.css';

const Card = ({ img, title, price, seller }) => (
  <div className="card">
      <div className="card__img--div">
      <img className="card__img" src={img} alt="img-card" />
      </div>
    <div className="card__text">
      <p>{title}</p>
      <h5>Price: {price}</h5>
      <p>Seller: {seller}</p>
    </div>
  </div>
);

export default Card;