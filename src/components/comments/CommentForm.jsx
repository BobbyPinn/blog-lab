import { useState } from 'react'

function CommentForm({ postId, onCommentPosted }) {
  const [name, setName] = useState('')
  const [body, setBody] = useState('')
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState(null) // { type: 'success' | 'error', text }

  function handleSubmit(e) {
    e.preventDefault()
    setMessage(null)

    // Validation: fields that are empty or only spaces don't count as filled in
    const newErrors = {}
    if (!name.trim()) newErrors.name = 'Please enter your name.'
    if (!body.trim()) newErrors.body = 'Please write a comment.'
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setSubmitting(true)
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ postId, name: name.trim(), body: body.trim() }),
    })
      .then((response) => {
        if (!response.ok) throw new Error(`Status ${response.status}`)
        return response.json()
      })
      .then((savedComment) => {
        // Only add the comment to the list after the API says it was posted
        onCommentPosted(savedComment)
        setName('')
        setBody('')
        setMessage({ type: 'success', text: 'Thanks! Your comment was posted.' })
      })
      .catch((err) => {
        console.error('Error posting comment:', err)
        setMessage({ type: 'error', text: 'Sorry, your comment could not be posted. Please try again.' })
      })
      .finally(() => setSubmitting(false))
  }

  return (
    <form className="stack-form comment-form" onSubmit={handleSubmit} noValidate>
      <h3>Leave a comment</h3>

      <label htmlFor="comment-name">Name</label>
      <input
        id="comment-name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        aria-invalid={Boolean(errors.name)}
        aria-describedby={errors.name ? 'comment-name-error' : undefined}
      />
      {errors.name && <p id="comment-name-error" className="field-error">{errors.name}</p>}

      <label htmlFor="comment-body">Comment</label>
      <textarea
        id="comment-body"
        rows="3"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        aria-invalid={Boolean(errors.body)}
        aria-describedby={errors.body ? 'comment-body-error' : undefined}
      />
      {errors.body && <p id="comment-body-error" className="field-error">{errors.body}</p>}

      <button type="submit" className="btn" disabled={submitting}>
        {submitting ? 'Posting…' : 'Submit'}
      </button>

      {message && (
        <p
          className={message.type === 'success' ? 'confirmation' : 'error'}
          role={message.type === 'success' ? 'status' : 'alert'}
        >
          {message.text}
        </p>
      )}
    </form>
  )
}

export default CommentForm
