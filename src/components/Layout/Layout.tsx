import React from 'react';
import './Layout.scss';
import ReviewsCard from '../ReviewsCard/ReviewsCard';

const Layout: React.FC = () => {
  return (
    <div className="main-layout">
      <ReviewsCard />
    </div>
  );
};

export default Layout;