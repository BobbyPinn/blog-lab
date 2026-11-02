function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand">
          <svg width="36" height="36" viewBox="0 0 64 64" aria-hidden="true">
            <rect width="64" height="64" rx="14" fill="#f2c94c" />
            <path d="M18 44V20l14 16V20M40 20h8M44 20v24" stroke="#0f5132" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Niner Dev Notes</span>
        </div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header