import React from 'react';
import './Comment.scss';

interface CommentProps {
  avatarUrl: string;
  rating: string;
  text: string;
  emojiUrl: string;
}

const Comment: React.FC<CommentProps> = ({ avatarUrl, rating, text, emojiUrl }) => {
  return (
    <div className="comment">
      <div className="comment__avatar-container">
        <div className="comment__avatar" style={{ backgroundImage: `url(${avatarUrl})` }} />
        <img src={emojiUrl} alt="emoji" className="comment__emoji" />
      </div>
      <div className="comment__content">
        <div className="comment__header">
          <span className="comment__rating">{rating}</span>
        </div>
        <p className="comment__text">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
