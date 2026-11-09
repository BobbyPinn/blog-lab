import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import Spinner from '../components/layout/Spinner.jsx'

function BlogPostsPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  // Empty dependency array: fetch the posts once, when the page first loads
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data)
        setLoading(false)
      })
      .catch((error) => console.error('Error fetching posts:', error))
  }, [])

  return (
    <section>
      <h1 className="page-title">Niner Dev Notes</h1>
      <p className="intro">
        I'm Jesus, a CS student at UNC Charlotte. These posts are loaded from the
        JSONPlaceholder API as I learn how React apps fetch data in ITIS 3135.
      </p>

      {loading && <Spinner label="Loading posts..." />}

      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id} className="post-card">
            <h2>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </h2>
            {/* Preview: only the first 100 characters of the post */}
            <p>{post.body.slice(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default BlogPostsPage
