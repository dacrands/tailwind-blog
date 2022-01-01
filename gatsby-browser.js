import React, { useState } from "react"
// custom CSS styles
import "./src/styles/global.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"
import { ThemeProvider } from "./src/context/theme"


export const wrapRootElement = ({ element }) => {  
  return <ThemeProvider>
    {element}
  </ThemeProvider>
}