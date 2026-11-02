export const post = {
  title: 'My First Blog Post',
  author: 'Jesus Pichardo',
  date: 'October 18, 2026',
  content: [
    'Welcome to my blog! This semester I started learning React, and this page is the first thing I built with it. Instead of one long HTML file, React lets me split the page into small, reusable components like the header, the post, and the comment section.',
    'The biggest ideas so far are props and state. Props pass data from a parent component down to a child, and state lets a component remember values that change, like the number of likes or the list of comments.',
    'Next, I want to connect a React frontend to a real backend so comments are saved in a database instead of disappearing on refresh.',
  ],
  likes: 12,
}

export const initialComments = [
  { id: 1, author: 'Maria Lopez', date: 'October 18, 2026', text: 'Great first post! Components finally clicked for me.' },
  { id: 2, author: 'Kevin Tran', date: 'October 18, 2026', text: 'Vite is so much faster than create-react-app.' },
  { id: 3, author: 'Aisha Johnson', date: 'October 17, 2026', text: 'Clean layout, and the like button is a nice touch.' },
]