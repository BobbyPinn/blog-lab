import { useState } from 'react'

function CommentForm({ onAddComment }) {
  const [name, setName] = useState('')
  const [text, setText] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim() || !text.trim()) return
    // Send the new comment up to the parent, which owns the comments list
    onAddComment({ name: name.trim(), text: text.trim() })
    setName('')
    setText('')
  }

  return (
    <form className="stack-form comment-form" onSubmit={handleSubmit}>
      <h3>Leave a comment</h3>
      <label htmlFor="comment-name">Name</label>
      <input
        id="comment-name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="comment-text">Comment</label>
      <textarea
        id="comment-text"
        rows="3"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />

      <button type="submit" className="btn">Submit</button>
    </form>
  )
}

export default CommentForm
