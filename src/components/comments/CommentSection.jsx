import { useState } from 'react'

function CommentSection({ initialComments }) {
  const [comments, setComments] = useState(initialComments)
  const [text, setText] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!text.trim()) return
    const newComment = {
      id: Date.now(),
      author: 'Guest',
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      text: text.trim(),
    }
    setComments([newComment, ...comments])
    setText('')
  }

  return (
    <section className="card">
      <h2>Comments ({comments.length})</h2>
      <form className="comment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul className="comment-list">
        {comments.map((c) => (
          <li key={c.id} className="comment">
            <p className="meta"><strong>{c.author}</strong> · {c.date}</p>
            <p>{c.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CommentSection