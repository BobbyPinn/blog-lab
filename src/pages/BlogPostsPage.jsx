import { Link } from 'react-router'
import { posts } from '../data/posts.js'

function BlogPostsPage() {
  return (
    <section>
      <h1 className="page-title">Niner Dev Notes</h1>
      <p className="intro">
        I'm Jesus, a CS student at UNC Charlotte. These are notes from learning React in
        ITIS 3135: what clicked, what broke, and what I'd do differently.
      </p>
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
