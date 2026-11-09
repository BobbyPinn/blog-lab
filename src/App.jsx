import { Routes, Route } from 'react-router'
import CommonLayout from './components/layout/CommonLayout.jsx'
import BlogPostsPage from './pages/BlogPostsPage.jsx'
import IndividualPostPage from './pages/IndividualPostPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

function App() {
  return (
    <Routes>
      {/* Routes nested here render inside CommonLayout's <Outlet /> */}
      <Route element={<CommonLayout />}>
        <Route path="/" element={<BlogPostsPage />} />
        <Route path="/post/:post_id" element={<IndividualPostPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
