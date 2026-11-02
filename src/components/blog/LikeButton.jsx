import { useState } from 'react'

function LikeButton({ initialLikes }) {
  const [liked, setLiked] = useState(false)
  const likes = liked ? initialLikes + 1 : initialLikes

  return (
    <button
      className={`like-btn ${liked ? 'liked' : ''}`}
      onClick={() => setLiked(!liked)}
      aria-pressed={liked}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 21s-7.5-4.6-9.5-9.2C1 8.3 3.4 5 6.8 5c2 0 3.6 1.1 5.2 3 1.6-1.9 3.2-3 5.2-3C20.6 5 23 8.3 21.5 11.8 19.5 16.4 12 21 12 21z"
          fill={liked ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
      {likes} {likes === 1 ? 'Like' : 'Likes'}
    </button>
  )
}

export default LikeButton