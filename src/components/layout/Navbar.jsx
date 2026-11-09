import { useContext } from 'react'
import { Link, NavLink } from 'react-router'
import { ThemeContext } from '../../context/ThemeContext.js'

// Quick links to the first few posts; the Blog Posts page lists all of them
const featuredPostIds = [1, 2, 3]

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const nextTheme = theme === 'light' ? 'dark' : 'light'

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="brand">Niner Dev Notes</Link>
        <nav className="nav" aria-label="Main">
          <NavLink to="/" end>Blog Posts</NavLink>
          {featuredPostIds.map((id) => (
            <NavLink key={id} to={`/post/${id}`}>
              Post {id}
            </NavLink>
          ))}
          <NavLink to="/contact">Contact</NavLink>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${nextTheme} mode`}
          >
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
