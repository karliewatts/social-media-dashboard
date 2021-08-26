import React, { useContext} from 'react';
import { ModeContext } from './components/Handlers';
import Header from './components/Header';
import FeatureCards from './components/FeatureCards';
import OverviewCards from './components/OverviewCards';
import './styles/App.scss';

const App = () => {
  const { darkMode } = useContext(ModeContext);

  return (
      <div className={`App ${darkMode}`}>
        <div className="App__accent"></div>
        <div className="App__grid">
          <Header />
          <main>
            <FeatureCards />
            <OverviewCards />
          </main>
        </div>
      </div>
    );
  };

export default App;
