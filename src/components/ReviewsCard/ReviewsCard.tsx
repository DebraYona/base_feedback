import React from 'react';
import './ReviewsCard.scss';
import OverallRating from './OverallRating';
import Comment from './Comment';
import Pagination from './Pagination';

const ReviewsCard = () => {
  return (
    <div className="reviews-card">
      <h3 className="reviews-card__title">Opiniones</h3>
      <OverallRating rating="Buena" emojiUrl="https://twemoji.maxcdn.com/v/latest/svg/1f600.svg" />
      <div className="reviews-card__comments">
        <Comment
          avatarUrl="https://i.pinimg.com/736x/22/09/40/220940c0f1793771f5b51b01e5ecf3be.jpg"
          emojiUrl="https://twemoji.maxcdn.com/v/latest/svg/1f600.svg"
          rating="Buena"
          text="Excelente comida, el servicio fue rápido y amable. El restaurante tiene una decoración encantadora. Definitivamente volveré."
        />
        <Comment
          avatarUrl="https://i.pinimg.com/736x/22/09/40/220940c0f1793771f5b51b01e5ecf3be.jpg"
          emojiUrl="https://twemoji.maxcdn.com/v/latest/svg/1f60d.svg"
          rating="Muy buena"
          text="¡Fantástica experiencia! La comida era deliciosa y presentada de manera excepcional. El personal fue atento y servicial. ¡Recomendado al 100%!"
        />
        <Comment
          avatarUrl="https://i.pinimg.com/736x/22/09/40/220940c0f1793771f5b51b01e5ecf3be.jpg"
          emojiUrl="https://twemoji.maxcdn.com/v/latest/svg/1f600.svg"
          rating="Buena"
          text="El restaurante ofrecía una selección impresionante de platos. El servicio fue amable y eficiente. ¡Una cena encantadora en un ambiente acogedor!"
        />
      </div>
      <Pagination />
    </div>
  );
};

export default ReviewsCard;
