import { createContext } from 'react'

// Components read this with useContext(ThemeContext) to get { theme, toggleTheme }
export const ThemeContext = createContext(null)
