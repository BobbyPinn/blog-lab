import { Outlet } from 'react-router'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

// Shared page frame: the matching child route renders where <Outlet /> is
function CommonLayout() {
  return (
    <div className="page">
      <Navbar />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default CommonLayout
