import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddPost from './pages/AddPost.jsx';
import PostAll from './pages/PostAll.jsx';
import Post from './pages/Post.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/add/:id",
    element: <AddPost/>,
  },
  {
    path: "/postAll",
    element: <PostAll/>,
  },
  {
    path: "/post/:postId",
    element: <Post/>,
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
