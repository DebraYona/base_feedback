import React from 'react';
import './Layout.scss';
import ReservationCard from '../ReservationCard/ReservationCard';
import AttendeesCard from '../AttendeesCard/AttendeesCard';
import ReviewsCard from '../ReviewsCard/ReviewsCard';

const Layout: React.FC = () => {
  return (
    <div className="main-layout">
      <div className="left-column">
        <ReservationCard />
      </div>
      <div className="right-column">
        <AttendeesCard />
        <ReviewsCard />
      </div>
    </div>
  );
};

export default Layout;