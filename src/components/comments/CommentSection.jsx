import { useState } from 'react'
import CommentForm from './CommentForm.jsx'

// Each post renders its own CommentSection with key={post.id},
// so switching posts starts a fresh comments state for that post.
function CommentSection({ initialComments }) {
  const [comments, setComments] = useState(initialComments)

  function addComment(comment) {
    setComments([...comments, { id: Date.now(), ...comment }])
  }

  return (
    <section className="card">
      <h2>Comments ({comments.length})</h2>
      {comments.length === 0 ? (
        <p className="empty">No comments yet. Be the first to comment!</p>
      ) : (
        <ul className="comment-list">
          {comments.map((c) => (
            <li key={c.id} className="comment">
              <p className="meta"><strong>{c.name}</strong></p>
              <p>{c.text}</p>
            </li>
          ))}
        </ul>
      )}
      <CommentForm onAddComment={addComment} />
    </section>
  )
}

export default CommentSection
