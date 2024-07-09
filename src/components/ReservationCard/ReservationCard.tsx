import React from 'react';
import { FaCalendarAlt, FaClock, FaUsers, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
import { MdCheckCircle } from 'react-icons/md';
import './ReservationCard.scss';

const ReservationCard = () => {
  return (
    <div className="reservation-card">
      <div className="reservation-card__header">
        <h3>Reserva de:</h3>
        <div className="reservation-card__status-container">
          <MdCheckCircle className="reservation-card__status-icon" />
          <span className="reservation-card__status-text">Completada</span>
        </div>
      </div>
      <h2>Manuel Antonio <br /> Gonzalez Pereira</h2>
      <div className="reservation-card__details">
        <div className="reservation-card__detail">
          <FaCalendarAlt />
          <span>Jue. 19 Ago 23</span>
        </div>
        <div className="reservation-card__detail">
          <FaClock />
          <span>18:00 hrs</span>
        </div>
        <div className="reservation-card__detail">
          <FaUsers />
          <span>6 Foodies</span>
        </div>
        <div className="reservation-card__detail">
          <FaMapMarkerAlt />
          <span>Cerca de los juegos</span>
        </div>
        <div className="reservation-card__detail">
          <FaHeart />
          <span>Sí, Ese día vamos con un niño que necesita silla de bebé</span>
        </div>
      </div>
    </div>
  );
};

export default ReservationCard;
