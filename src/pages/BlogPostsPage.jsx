import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import Spinner from '../components/layout/Spinner.jsx'

// Show only the start of each post on the list page; the full text is on the post page
function preview(text) {
  const oneLine = text.replace(/\n/g, ' ')
  return oneLine.length > 100 ? oneLine.slice(0, 100).trim() + '…' : oneLine
}

function BlogPostsPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Empty dependency array: fetch the posts once, when the page first loads
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        // fetch only fails on network errors, so check the status code too
        if (!response.ok) throw new Error(`Status ${response.status}`)
        return response.json()
      })
      .then((data) => setPosts(data))
      .catch((err) => {
        console.error('Error fetching posts:', err)
        setError('Sorry, the blog posts could not be loaded. Please try again later.')
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <section>
      <h1 className="page-title">Niner Dev Notes</h1>
      <p className="intro">
        I'm Jesus, a CS student at UNC Charlotte. These posts are loaded from the
        JSONPlaceholder API as I learn how React apps fetch data in ITIS 3135.
      </p>

      {loading && <Spinner label="Loading posts…" />}
      {error && <p className="error" role="alert">{error}</p>}

      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id} className="post-card">
            <h2>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </h2>
            <p className="meta">Post #{post.id}</p>
            <p>{preview(post.body)}</p>
            <Link to={`/post/${post.id}`} className="read-more">
              Read more →
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default BlogPostsPage
