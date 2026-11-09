import LikeButton from './LikeButton.jsx'

function BlogPost({ title, body, user }) {
  return (
    <article className="card">
      <h1 className="post-title">{title}</h1>

      {/* Author details come from the /users/{userId} request */}
      {user && (
        <div className="author">
          <p className="author-name">
            By <strong>{user.name}</strong> (@{user.username})
          </p>
          <p className="meta">
            <a href={`mailto:${user.email}`}>{user.email}</a> · {user.company.name}
          </p>
        </div>
      )}

      {/* The API puts line breaks in the body, so show each line as a paragraph */}
      {body.split('\n').map((line, i) => (
        <p key={i}>{line}</p>
      ))}

      <LikeButton initialLikes={0} />
    </article>
  )
}

export default BlogPost
