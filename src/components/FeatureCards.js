import React  from 'react';
import FeatureCard from './FeatureCard';
import {ReactComponent as Instagram} from '../images/icon-instagram.svg';
import {ReactComponent as Facebook} from '../images/icon-facebook.svg';
import {ReactComponent as Twitter} from '../images/icon-twitter.svg';
import {ReactComponent as YouTube} from '../images/icon-youtube.svg';
import {ReactComponent as Up} from '../images/icon-up.svg';
import {ReactComponent as Down} from '../images/icon-down.svg';

const FeatureCards = () => {

  return (
  <div className="ft-cards" role="grid">
    <FeatureCard
    socialIcon={<Facebook />}
    socialClass={`facebook`}
    socialHandle={`@nathanf`}
    socialFollowers={`1987`}
    upOrDown={<Up />}
    upOrDownClass={`up`}
    socialValue={`12`}
    />
    <FeatureCard
    socialIcon={<Twitter />}
    socialClass={`twitter`}
    socialHandle={`@nathanf`}
    socialFollowers={`1044`}
    upOrDown={<Up />}
    upOrDownClass={`up`}
    socialValue={`99`}
    />
    <FeatureCard
    socialIcon={<Instagram />}
    socialClass={`instagram`}
    socialHandle={`@realnathanf`}
    socialFollowers={`11k`}
    upOrDown={<Up />}
    upOrDownClass={`up`}
    socialValue={`1099`}
    />
    <FeatureCard
    socialIcon={<YouTube />}
    socialClass={`youtube`}
    socialHandle={`@Nathan F.`}
    socialFollowers={`8239`}
    upOrDown={<Down />}
    upOrDownClass={`down`}
    socialValue={`144`}
    />
  </div>
  )
};

export default FeatureCards;