import React, { useState } from "react";

export const ThemeContext = React.createContext();
const ThemeContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
