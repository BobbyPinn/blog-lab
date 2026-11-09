import { useState } from 'react'

function CommentForm({ postId, onCommentPosted }) {
  const [name, setName] = useState('')
  const [body, setBody] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    // Validation: don't submit if either field is empty or only spaces
    if (!name.trim() || !body.trim()) return

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ postId, name: name.trim(), body: body.trim() }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Add the comment to the list only after it was posted
        onCommentPosted(data)
        setName('')
        setBody('')
      })
      .catch((error) => console.error('Error posting comment:', error))
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

      <label htmlFor="comment-body">Comment</label>
      <textarea
        id="comment-body"
        rows="3"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />

      <button type="submit" className="btn">Submit</button>
    </form>
  )
}

export default CommentForm
