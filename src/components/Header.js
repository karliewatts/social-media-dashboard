import React, {useContext} from 'react';
import { ModeContext } from './Handlers';
import '../styles/Header.scss';

const Header = () => {
  const { handleMode } = useContext(ModeContext);

  return (
    <header className="header">
        <div className="header__grid">
          <div className="header__title">
            <h1>Social Media Dashboard</h1>
            <p>Total Followers: 23,004</p>
          </div>
          <div className="header__mode">
            <p>Dark Mode</p>
            <label className="switch">
              <input type="checkbox" aria-checked="false"  onClick={handleMode}/>
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </header>
  )
};

export default Header;