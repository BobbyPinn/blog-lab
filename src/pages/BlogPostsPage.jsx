import { Link } from 'react-router'
import { posts } from '../data/posts.js'

function BlogPostsPage() {
  return (
    <section>
      <h1 className="page-title">Blog Posts</h1>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id} className="post-card">
            <h2>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </h2>
            <p className="meta">{post.date}</p>
            <p>{post.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default BlogPostsPage
