import React from 'react';
import '../styles/Card.css'; // Corrected import path

const Card = ({ value, isFlipped, onClick }) => (
  <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
    <span className="card-content">{isFlipped ? value : '?'}</span>
  </div>
);

export default Card;
