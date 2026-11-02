import { Link, NavLink } from 'react-router'
import { posts } from '../../data/posts.js'

function Navbar() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="brand">
          <svg width="36" height="36" viewBox="0 0 64 64" aria-hidden="true">
            <rect width="64" height="64" rx="14" fill="#f2c94c" />
            <path d="M18 44V20l14 16V20M40 20h8M44 20v24" stroke="#0f5132" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Niner Dev Notes</span>
        </Link>
        <nav className="nav" aria-label="Main">
          <NavLink to="/" end>Blog Posts</NavLink>
          {posts.map((post) => (
            <NavLink key={post.id} to={`/post/${post.id}`} title={post.title}>
              Post {post.id}
            </NavLink>
          ))}
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
