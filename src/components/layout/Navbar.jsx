import { useContext } from 'react'
import { Link, NavLink } from 'react-router'
import { ThemeContext } from '../../context/ThemeContext.js'
import { posts } from '../../data/posts.js'

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const nextTheme = theme === 'light' ? 'dark' : 'light'

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="brand">Niner Dev Notes</Link>
        <nav className="nav" aria-label="Main">
          <NavLink to="/" end>Blog Posts</NavLink>
          {posts.map((post) => (
            <NavLink key={post.id} to={`/post/${post.id}`} title={post.title}>
              Post {post.id}
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
