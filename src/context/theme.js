import React, { useState } from "react"
import { createContext } from "react";

const ThemeContext = createContext({
  isDarkTheme: false,
  setIsDarkTheme: () => {}
});

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  return <ThemeContext.Provider value={[isDarkTheme, setIsDarkTheme]}>
    {children}
  </ThemeContext.Provider>
}

export { ThemeContext, ThemeProvider }