import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/Posts.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import NewPost, { submitter } from './routes/NewPost.jsx'
import RouteLayout from './routes/RootLayout.jsx'
import Posts, {loader as postsLoader} from './routes/Posts.jsx'




const router = createBrowserRouter([
  {path:'/', element:<RouteLayout></RouteLayout>, 
  children:[
    {path:'/', 
    element:<Posts></Posts>,
    loader: postsLoader, 
    children:[
      {path:'/create-post', 
      element: <NewPost ></NewPost>,
    action:submitter}
    ]}
  ]},
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
