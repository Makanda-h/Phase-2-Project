import About from './components/About';
import Menu from './Menu';
import Contact from './components/Contact';
import Review from './components/Review';
import Search from './Search';
import Cart from './components/Cart'
import App from './App';
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
