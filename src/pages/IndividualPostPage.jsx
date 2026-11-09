import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router'
import BlogPost from '../components/blog/BlogPost.jsx'
import CommentSection from '../components/comments/CommentSection.jsx'
import Spinner from '../components/layout/Spinner.jsx'

function IndividualPostPage() {
  const { post_id } = useParams()
  const [post, setPost] = useState(null)
  const [user, setUser] = useState(null)

  // Runs again whenever the post ID in the URL changes
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data)
        // The post only has a userId, so fetch that user to get the author's name
        if (data.userId) {
          fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`)
            .then((response) => response.json())
            .then((userData) => setUser(userData))
            .catch((error) => console.error('Error fetching user:', error))
        }
      })
      .catch((error) => console.error('Error fetching post:', error))
  }, [post_id])

  if (!post) {
    return <Spinner label="Loading post..." />
  }

  // The API sends back an empty object for an ID that doesn't exist
  if (!post.id) {
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
      <BlogPost title={post.title} body={post.body} user={user} />
      <CommentSection postId={post.id} />
    </>
  )
}

export default IndividualPostPage
