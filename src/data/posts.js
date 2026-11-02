export const posts = [
  {
    id: 1,
    title: 'My First Blog Post',
    author: 'Jesus Pichardo',
    date: 'October 18, 2026',
    summary: 'Why I started learning React, and what components, props, and state mean.',
    content: [
      'Welcome to my blog! This semester I started learning React, and this page is the first thing I built with it. Instead of one long HTML file, React lets me split the page into small, reusable components like the header, the post, and the comment section.',
      'The biggest ideas so far are props and state. Props pass data from a parent component down to a child, and state lets a component remember values that change, like the number of likes or the list of comments.',
      'Next, I want to connect a React frontend to a real backend so comments are saved in a database instead of disappearing on refresh.',
    ],
    likes: 12,
    comments: [
      { id: 1, name: 'Maria Lopez', text: 'Great first post! Components finally clicked for me.' },
      { id: 2, name: 'Kevin Tran', text: 'Vite is so much faster than create-react-app.' },
      { id: 3, name: 'Aisha Johnson', text: 'Clean layout, and the like button is a nice touch.' },
    ],
  },
  {
    id: 2,
    title: 'Adding Pages with React Router',
    author: 'Jesus Pichardo',
    date: 'October 25, 2026',
    summary: 'Turning a one-page app into a site with real URLs for every post.',
    content: [
      'My blog started as a single page. To give every post its own address, I added React Router. It reads the URL and decides which component to show, without the browser reloading the page.',
      'Each post now lives at a path like /post/2. The number at the end is a URL parameter, and the post page reads it with the useParams hook to find the right post in my data.',
      'The navbar uses Link components instead of regular anchor tags, so moving between pages feels instant.',
    ],
    likes: 8,
    comments: [],
  },
  {
    id: 3,
    title: 'Sharing a Theme with Context',
    author: 'Jesus Pichardo',
    date: 'November 1, 2026',
    summary: 'How createContext and useContext let any component read the light or dark theme.',
    content: [
      'I wanted a dark mode toggle in the navbar, but the theme affects the whole page. Passing a theme prop through every component would get messy fast. This problem is called prop drilling.',
      'React Context solves it. I created a ThemeContext, wrapped the app in a provider, and now any component can call useContext to read the current theme or switch it.',
      'I also save the choice in localStorage, so the site remembers dark mode after a refresh.',
    ],
    likes: 5,
    comments: [],
  },
]
