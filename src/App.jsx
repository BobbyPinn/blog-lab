import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import BlogPost from './components/blog/BlogPost.jsx'
import CommentSection from './components/comments/CommentSection.jsx'
import { post, initialComments } from './data/posts.js'

function App() {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <BlogPost
          title={post.title}
          author={post.author}
          date={post.date}
          content={post.content}
          likes={post.likes}
        />
        <CommentSection initialComments={initialComments} />
      </main>
      <Footer />
    </div>
  )
}

export default App