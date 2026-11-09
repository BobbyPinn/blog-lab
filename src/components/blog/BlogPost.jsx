import LikeButton from './LikeButton.jsx'

function BlogPost({ title, body, user }) {
  return (
    <article className="card">
      <h1 className="post-title">{title}</h1>
      {user && (
        <p className="meta">
          By <strong>{user.name}</strong> · {user.email}
        </p>
      )}
      <p>{body}</p>
      <LikeButton initialLikes={0} />
    </article>
  )
}

export default BlogPost
