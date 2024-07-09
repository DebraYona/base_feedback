import React from 'react';
import './AttendeesCard.scss';
import Attendee from './Attendee';

const AttendeesCard = () => {
  return (
    <div className="attendees-card">
      <h3 className="attendees-card__title">Asistentes</h3>
      <div className="attendees-card__list">
        <Attendee
          name="Manuel Antonio Gonzalez Per..."
          role="Anfitrión"
          avatarUrl="https://i.pinimg.com/736x/22/09/40/220940c0f1793771f5b51b01e5ecf3be.jpg"
          isHost={true}
        />
        <Attendee
          name="Antonio"
          avatarUrl="https://i.pinimg.com/736x/22/09/40/220940c0f1793771f5b51b01e5ecf3be.jpg"
        />
        <Attendee
          name="Niño"
          avatarUrl="https://i.pinimg.com/736x/22/09/40/220940c0f1793771f5b51b01e5ecf3be.jpg"
        />
        <Attendee
          name="Adulto"
          avatarUrl="https://i.pinimg.com/736x/22/09/40/220940c0f1793771f5b51b01e5ecf3be.jpg"
        />
        <Attendee
          name="Adulto"
          avatarUrl="https://i.pinimg.com/736x/22/09/40/220940c0f1793771f5b51b01e5ecf3be.jpg"
        />
      </div>
    </div>
  );
};

export default AttendeesCard;
