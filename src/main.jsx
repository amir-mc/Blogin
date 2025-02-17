import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layout/mainlay.jsx';
import Homepage from './router/homepage.jsx';
import Postlist from './router/postlist.jsx';
import SinglePage from './router/singlepage.jsx';
import Write from './router/write.jsx';
import Loginpage from './router/loginpage.jsx';
import Registerpage from './router/registerpage.jsx';

const router = createBrowserRouter([
 {
  element:<MainLayout/>,
  children:[
    {
      path: "/",
      element: <Homepage/>
    },
    {
      path: "/post",
      element: <Postlist/>
    },
    {
      path: "/:slug",
      element: <SinglePage/>
    },
    {
      path: "/write",
      element: <Write/>
    },
    {
      path: "/login",
      element: <Loginpage/>
    },
    {
      path: "/register",
      element: <Registerpage/>
    },



  ]
 }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)

