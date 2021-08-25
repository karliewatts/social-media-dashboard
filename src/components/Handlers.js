import React, { useState } from "react";

export const ModeContext = React.createContext();

const ModeProvider = props => {
  const [ darkMode, setDarkMode ] = useState('is-light');

  const handleMode = () => {
    setDarkMode(darkMode === "is-dark" ? "is-light" : "is-dark");
  }

  return (
    <ModeContext.Provider value={{ darkMode, handleMode }}>
      {props.children}
    </ModeContext.Provider>
  );
};

export default ModeProvider;
