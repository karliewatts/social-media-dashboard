import React from 'react';
import '../styles/OverviewCards.scss';

const OverviewCard = ({socialType, socialIcon, socialValue, upOrDownClass, upOrDown, socialPercent}) => {

  return (
  <div className="over-card" role="contentinfo">
    <div className="over-card__top">
        <p>{socialType}</p>
        {socialIcon}
    </div>
        <div className="over-card__bottom">
        <p>{socialValue}</p>
        <div className="over-card__amount">
        {upOrDown}
        <p className={upOrDownClass}>{socialPercent}% Today</p>
      </div>
    </div>
  </div>
  )
};

export default OverviewCard;