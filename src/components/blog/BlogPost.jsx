import LikeButton from './LikeButton.jsx'

function BlogPost({ title, author, date, content, likes }) {
  return (
    <article className="card">
      <h1 className="post-title">{title}</h1>
      <p className="meta">By <strong>{author}</strong> · {date}</p>
      {content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      <LikeButton initialLikes={likes} />
    </article>
  )
}

export default BlogPost