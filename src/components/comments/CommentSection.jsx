import { useEffect, useState } from 'react'
import CommentForm from './CommentForm.jsx'
import Spinner from '../layout/Spinner.jsx'

function CommentSection({ postId }) {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data)
        setLoading(false)
      })
      .catch((error) => console.error('Error fetching comments:', error))
  }, [postId])

  // CommentForm calls this after the POST request finishes
  function addComment(newComment) {
    // The API returns id 501 for every new comment, so make our own id
    // to keep the keys in the list unique
    setComments([...comments, { ...newComment, id: Date.now() }])
  }

  return (
    <section className="card">
      <h2>Comments ({comments.length})</h2>

      {loading && <Spinner label="Loading comments..." />}

      {!loading && comments.length === 0 && (
        <p className="empty">No comments yet. Be the first to comment!</p>
      )}

      <ul className="comment-list">
        {comments.map((c) => (
          <li key={c.id} className="comment">
            <p className="comment-name">{c.name}</p>
            <p>{c.body}</p>
          </li>
        ))}
      </ul>

      <CommentForm postId={postId} onCommentPosted={addComment} />
    </section>
  )
}

export default CommentSection
