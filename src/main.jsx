import React from 'react'
import ReactDOM from 'react-dom/client'
import {


  RouterProvider, createBrowserRouter,
} from "react-router-dom";
import './index.css'
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Footer from './Pages/Footer/Footer';
import Navbar from './Pages/Navbar/Navbar';
import Banner from './Pages/Banner/Banner';
import Blog from './Pages/Blog';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },


      {
        path:'navbar',
        element: <Navbar></Navbar>
      },
      {
        path:'banner',
        element: <Banner></Banner>
      },


      {
        path: 'blog',
        element: <Blog></Blog>
      },


      {
        path:'footer',
        element: <Footer></Footer>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
