import { useParams, Link } from 'react-router'
import { posts } from '../data/posts.js'
import BlogPost from '../components/blog/BlogPost.jsx'
import CommentSection from '../components/comments/CommentSection.jsx'

function IndividualPostPage() {
  // URL params are strings, so convert to a number to match the ids in posts.js
  const { post_id } = useParams()
  const post = posts.find((p) => p.id === Number(post_id))

  if (!post) {
    return (
      <section className="card">
        <h1 className="post-title">Post not found</h1>
        <p>There is no post with ID "{post_id}".</p>
        <Link to="/" className="read-more">← Back to all posts</Link>
      </section>
    )
  }

  return (
    <>
      <BlogPost
        key={`post-${post.id}`}
        title={post.title}
        author={post.author}
        date={post.date}
        content={post.content}
        likes={post.likes}
      />
      <CommentSection key={`comments-${post.id}`} initialComments={post.comments} />
    </>
  )
}

export default IndividualPostPage
