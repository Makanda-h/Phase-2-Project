<<<<<<< HEAD
import { useState } from 'react'
=======
import  React from 'react'
import NavBar from './components/NavBar'
>>>>>>> main
import './App.css'
import NavBar from './components/NavBar';
import Cart from './components/cart/Cart'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


function App() {
<<<<<<< HEAD

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
);
=======
  
  
  return (
    <>
      <header>
        <NavBar />
      </header>
    </>
  )
>>>>>>> main
}
export default App;


