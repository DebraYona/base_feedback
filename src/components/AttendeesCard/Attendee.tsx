import React from 'react';
import './Attendee.scss';

interface AttendeeProps {
  name: string;
  avatarUrl: string;
  role?: string;
  isHost?: boolean;
}

const Attendee: React.FC<AttendeeProps> = ({ name, avatarUrl, role, isHost }) => {
  return (
    <div className={`attendee ${isHost ? 'attendee--host' : ''}`}>
      <div className="attendee__avatar" style={{ backgroundImage: `url(${avatarUrl})` }} />
      <div className="attendee__info">
        <span className="attendee__name">{name}</span>
        {role && <span className="attendee__role">{role}</span>}
      </div>
    </div>
  );
};

export default Attendee;
