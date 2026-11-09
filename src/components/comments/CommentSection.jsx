import { useEffect, useState } from 'react'
import CommentForm from './CommentForm.jsx'
import Spinner from '../layout/Spinner.jsx'

function CommentSection({ postId }) {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let ignore = false

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => {
        if (!response.ok) throw new Error(`Status ${response.status}`)
        return response.json()
      })
      .then((data) => {
        if (!ignore) setComments(data)
      })
      .catch((err) => {
        console.error('Error fetching comments:', err)
        if (!ignore) setError('Sorry, the comments could not be loaded.')
      })
      .finally(() => {
        if (!ignore) setLoading(false)
      })

    return () => {
      ignore = true
    }
  }, [postId])

  // CommentForm calls this after its POST request succeeds
  function addComment(newComment) {
    // JSONPlaceholder doesn't really save comments and returns id 501 every time,
    // so give each new comment its own id to keep React's list keys unique.
    setComments((current) => [...current, { ...newComment, id: `new-${Date.now()}` }])
  }

  return (
    <section className="card">
      <h2>Comments{!loading && !error && ` (${comments.length})`}</h2>

      {loading && <Spinner label="Loading comments…" />}
      {error && <p className="error" role="alert">{error}</p>}

      {!loading && !error && comments.length === 0 && (
        <p className="empty">No comments yet. Be the first to comment!</p>
      )}

      {comments.length > 0 && (
        <ul className="comment-list">
          {comments.map((c) => (
            <li key={c.id} className="comment">
              <p className="comment-name">{c.name}</p>
              <p>{c.body}</p>
            </li>
          ))}
        </ul>
      )}

      <CommentForm postId={postId} onCommentPosted={addComment} />
    </section>
  )
}

export default CommentSection
