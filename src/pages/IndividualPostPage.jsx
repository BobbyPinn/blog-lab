import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router'
import BlogPost from '../components/blog/BlogPost.jsx'
import CommentSection from '../components/comments/CommentSection.jsx'
import Spinner from '../components/layout/Spinner.jsx'

function IndividualPostPage() {
  const { post_id } = useParams()

  // React Router keeps this page mounted when only the ID in the URL changes
  // (for example Post 1 → Post 2 in the navbar). The key tells React to start
  // PostDetails over for each new ID, so the old post never flashes on screen.
  return <PostDetails key={post_id} postId={post_id} />
}

function PostDetails({ postId }) {
  const [post, setPost] = useState(null)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // If the user leaves the page before the requests finish, ignore the results
    let ignore = false

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        if (!response.ok) throw new Error(`Status ${response.status}`)
        return response.json()
      })
      .then((postData) => {
        if (ignore) return
        setPost(postData)
        // The post only has a userId, so make a second request for the author
        return fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`)
          .then((response) => {
            if (!response.ok) throw new Error(`Status ${response.status}`)
            return response.json()
          })
          .then((userData) => {
            if (!ignore) setUser(userData)
          })
      })
      .catch((err) => {
        console.error('Error fetching post:', err)
        if (!ignore) setError('Sorry, this post could not be loaded.')
      })
      .finally(() => {
        if (!ignore) setLoading(false)
      })

    return () => {
      ignore = true
    }
  }, [postId])

  if (loading) {
    return <Spinner label="Loading post…" />
  }

  if (!post) {
    return (
      <section className="card">
        <h1 className="post-title">Post not found</h1>
        <p className="error" role="alert">{error}</p>
        <Link to="/" className="read-more">← Back to all posts</Link>
      </section>
    )
  }

  return (
    <>
      <BlogPost title={post.title} body={post.body} user={user} />
      {/* The post loaded, but the author request failed */}
      {error && <p className="error" role="alert">The author's details could not be loaded.</p>}
      <CommentSection postId={post.id} />
    </>
  )
}

export default IndividualPostPage
