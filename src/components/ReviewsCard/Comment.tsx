import React from 'react';
import styles from './Comment.module.scss';

interface CommentProps {
  avatarUrl: string;
  rating: string;
  text: string;
  emojiUrl: string;
}

const Comment: React.FC<CommentProps> = ({ avatarUrl, rating, text, emojiUrl }) => {
  return (
    <div className={styles.comment}>
      <div className={styles.avatarContainer}>
        <div className={styles.avatar} style={{ backgroundImage: `url(${avatarUrl})` }} />
        <img src={emojiUrl} alt="emoji" className={styles.emoji} />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.rating}>{rating}</span>
        </div>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
