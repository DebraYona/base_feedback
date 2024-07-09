import React from 'react';
import './Pagination.scss';

const Pagination = () => {
  return (
    <div className="pagination">
      <button className="pagination__button">{'<'}</button>
      <button className="pagination__button pagination__button--active">1</button>
      <button className="pagination__button">2</button>
      <button className="pagination__button">3</button>
      <button className="pagination__button">4</button>
      <button className="pagination__button">{'>'}</button>
    </div>
  );
};

export default Pagination;
