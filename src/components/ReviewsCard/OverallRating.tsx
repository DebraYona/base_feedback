import React from 'react';
import styles from './OverallRating.module.scss';

interface OverallRatingProps {
  rating: string;
  emojiUrl: string;
}

const OverallRating: React.FC<OverallRatingProps> = ({ rating, emojiUrl }) => {
  return (
    <div className={styles.overallRating}>
      <img src={emojiUrl} alt="emoji" className={styles.emoji} />
      <span className={styles.text}>La experiencia fue: {rating}</span>
    </div>
  );
};

export default OverallRating;
