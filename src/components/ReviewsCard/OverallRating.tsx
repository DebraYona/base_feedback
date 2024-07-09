import React from 'react';
import './OverallRating.scss';

interface OverallRatingProps {
  rating: string;
  emojiUrl: string;
}

const OverallRating: React.FC<OverallRatingProps> = ({ rating, emojiUrl }) => {
  return (
    <div className="overall-rating">
      <img src={emojiUrl} alt="emoji" className="overall-rating__emoji" />
      <span className="overall-rating__text">La experiencia fue: {rating}</span>
    </div>
  );
};

export default OverallRating;
