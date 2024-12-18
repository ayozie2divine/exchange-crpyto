import './App.css'
import React from 'react'
import Nav from './Components/Nav/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Register from './Components/Register/Register'
import Successful from './Components/Successful/Successful'
import About from './Components/About/About'
import Hero from './Components/Hero/Hero'
import Contact from './Components/Contact/Contact'
import Login from './Components/Login/Login'


function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Login />} />
          <Route path='/Chizzyexchange/Register/Signup' element={<Register />} />
          <Route path='/Chizzyexchange' element={<Home />} />
          <Route path='/Cancel/Chizzyexchange' element={<Home />} />
          <Route path='/Chizzyexchange/Register/Signup/Successful' element={<Successful />} />
          <Route path='/Chizzyexchange/Aboutus' element={<About />} />
          <Route path='/Chizzyexchange/Login/Trade' element={<Hero />} />
          <Route path='/Chizzyexchange/COntactus'element={<Contact />} />
          <Route path='/Chizzyexchange/Register/Signup/Successful/Trade' element={<Hero />} />
          <Route path='/Chizzyexchange/Login' element={<Login />} />
        </Routes>
      </div>
    </>
  )
}

export default App
