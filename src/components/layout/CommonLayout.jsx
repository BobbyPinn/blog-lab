import { useContext } from 'react'
import { Outlet } from 'react-router'
import { ThemeContext } from '../../context/ThemeContext.js'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

// Shared page frame: the matching child route renders where <Outlet /> is
function CommonLayout() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`page theme-${theme}`}>
      <Navbar />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default CommonLayout
