import React from 'react';
import './Home.css'; 
const BookCard = ({ book }) => {
  return (
    <div className="card">
      <div className="card_img">
        <img src={book.img} alt={book.title} />
      </div>
      <div className="card_text">
        <h1>{book.name}</h1>
        <span>{book.author}</span>
        <p>{book.desc}</p>
      </div>
    </div>
  );
};

export default BookCard;
