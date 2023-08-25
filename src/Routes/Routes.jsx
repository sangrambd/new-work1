
import {


     createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Navbar from "../Pages/Navbar/Navbar";
import Banner from "../Pages/Banner/Banner";
import Blog from "../Pages/Blog";
import Footer from "../Pages/Footer/Footer";
import Login from "../Pages/Login/Login";


  
 export const router = createBrowserRouter([
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
          path:'login',
          element:<Login></Login>
        },
  
  
        {
          path:'footer',
          element: <Footer></Footer>
        }
      ]
    },
  ]);