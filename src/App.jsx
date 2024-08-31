
import React from 'react';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home'
import About from '../src/Components/About'
import Contact from '../src/Components/Contact'
import Cart from './Pages/Cart';
import PlaceOrder from './Pages/PlaceOrder';
import Menu from './Components/Menu';

function App(props) {
  return (
    <>
   <div className="app">
   <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/menu' element={<Menu/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/placeOrder' element={<PlaceOrder/>} />
    </Routes>
   </div>
    </>
  );
}

export default App;