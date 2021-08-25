import React  from 'react';
import '../styles/FeatureCards.scss';

const FeatureCard = ({socialIcon, socialClass, socialHandle, socialFollowers, upOrDown, upOrDownClass, socialValue}) => {

  return (
  <div className="ft-card">
    <div className={`ft-card__top-line ${socialClass}`}></div>
    <div className="ft-card__grid">
      <div className="ft-card__handle">
          {socialIcon}
          <p>{socialHandle}</p>
      </div>
      <h2>{socialFollowers}</h2>
      <h3>followers</h3>
      <div className="ft-card__amount">
        {upOrDown}
        <p className={upOrDownClass}>{socialValue} Today</p>
      </div>
    </div>
  </div>
  )
};

export default FeatureCard;