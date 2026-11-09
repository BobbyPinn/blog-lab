import { useState, useEffect } from 'react'
import { ThemeContext } from './ThemeContext.js'

function ThemeProvider({ children }) {
  // Start with the saved theme if there is one (this function only runs on the first render)
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
  )

  // Save the theme every time it changes so it survives a reload
  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
