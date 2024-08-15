import About from './About';
import Menu from './Menu';
import Contact from './Contact';
import Blogs from './Blogs';
import Products from './Products';
import Review from './Review';
import Search from './Search';
import Cart from './Cart'
import App from '../App';
import  React from 'react'


const routes = [
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/menu",
    element: <Menu />
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/review",
    element: <Review />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/blogs",
    element: <Blogs />
  },
  {
    path: "/search",
    element: <Search />
  },
  {
    path: "/cart",
    element: <Cart />
  }
]

export default routes;
