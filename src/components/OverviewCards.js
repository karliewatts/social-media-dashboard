import React  from 'react';
import OverviewCard from './OverviewCard';
import {ReactComponent as Instagram} from '../images/icon-instagram.svg';
import {ReactComponent as Facebook} from '../images/icon-facebook.svg';
import {ReactComponent as Twitter} from '../images/icon-twitter.svg';
import {ReactComponent as YouTube} from '../images/icon-youtube.svg';
import {ReactComponent as Up} from '../images/icon-up.svg';
import {ReactComponent as Down} from '../images/icon-down.svg';

const OverviewCards = () => {

  return (
  <div className="over-cards" role="rowgroup">
      <div className="over-cards__header">
          <h3>Overview - Today</h3>
      </div>
      <div className="over-cards__grid">
        <OverviewCard
            socialType={`Page Views`}
            socialIcon={<Facebook />}
            socialValue={`87`}
            upOrDownClass={`up`}
            upOrDown={<Up />}
            socialPercent={`3`}
        />
        <OverviewCard
            socialType={`Likes`}
            socialIcon={<Facebook />}
            socialValue={`52`}
            upOrDownClass={`down`}
            upOrDown={<Down />}
            socialPercent={`2`}
        />
        <OverviewCard
            socialType={`Likes`}
            socialIcon={<Instagram />}
            socialValue={`5462`}
            upOrDownClass={`up`}
            upOrDown={<Up />}
            socialPercent={`2257`}
        />
        <OverviewCard
            socialType={`Profile Views`} 
            socialIcon={<Instagram />}
            socialValue={`52k`}
            upOrDownClass={`up`}
            upOrDown={<Up />}
            socialPercent={`1375`}
        />
        <OverviewCard
            socialType={`Retweets`} 
            socialIcon={<Twitter />}
            socialValue={`117`}
            upOrDownClass={`up`}
            upOrDown={<Up />}
            socialPercent={`303`}
        />
        <OverviewCard
            socialType={`Likes`} 
            socialIcon={<Twitter />}
            socialValue={`507`}
            upOrDownClass={`up`}
            upOrDown={<Up />}
            socialPercent={`553`}
        />
        <OverviewCard
            socialType={`Likes`} 
            socialIcon={<YouTube />}
            socialValue={`107`}
            upOrDownClass={`down`}
            upOrDown={<Down />}
            socialPercent={`19`}
        />
        <OverviewCard
            socialType={`Total Views`} 
            socialIcon={<YouTube />}
            socialValue={`1407`}
            upOrDownClass={`down`}
            upOrDown={<Down />}
            socialPercent={`12`}
        />
      </div>
  </div>
  )
};

export default OverviewCards;