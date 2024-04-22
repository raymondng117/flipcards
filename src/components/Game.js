import React, { useState } from 'react';
import Card from './Card';
import '../styles/Game.css';

const generateRandomCards = () => {
  const symbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const randomSymbols = [...symbols, ...symbols].sort(() => Math.random() - 0.5);
  return randomSymbols.map((symbol, index) => ({ id: index, symbol, isFlipped: false }));
};

const Game = () => {
  const [cards, setCards] = useState(generateRandomCards());
  const [flippedCards, setFlippedCards] = useState([]);
  
  const handleCardClick = (card) => {
    if (flippedCards.length < 2 && !card.isFlipped) {
      const newCards = cards.map(c =>
        c.id === card.id ? { ...c, isFlipped: true } : c
      );
      setCards(newCards);
      setFlippedCards([...flippedCards, card]);
      
      if (flippedCards.length === 1) {
        setTimeout(() => {
          if (flippedCards[0].symbol === card.symbol) {
            setCards(newCards.map(c =>
              c.id === card.id || c.id === flippedCards[0].id ? { ...c, isFlipped: true } : c
            ));
          } else {
            setCards(newCards.map(c =>
              c.id === card.id || c.id === flippedCards[0].id ? { ...c, isFlipped: false } : c
            ));
          }
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="game">
      {cards.map(card => (
        <Card
          key={card.id}
          value={card.symbol}
          isFlipped={card.isFlipped}
          onClick={() => handleCardClick(card)}
        />
      ))}
    </div>
  );
};

export default Game;
