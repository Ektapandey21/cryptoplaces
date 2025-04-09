import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes , Route, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './components/Footer/Footer'

import Login from './pages/Login'
import EmailVerify from './pages/EmailVerify'
import ResetPassword from './pages/ResetPassword'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Features from './pages/Features'
import Blog from './pages/blogPosts'
const App = () => {


  const location = useLocation();
  const showNavbar = location.pathname !== '/';
  return (
     
    <div className='galaxy-bg'>
    <div className='app'>
    {showNavbar && <Navbar />}
    <ToastContainer/>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Login/>}/> 
        <Route path='/coin/:coinId' element={<Coin/>}/> 
        {/* // signup pages */}
        <Route path='Home' element={<Home/>}/>
        <Route path='Features' element={<Features/>}/>
        <Route path='BlogPosts' element={<Blog/>}/>
        <Route path='email-verify' element={<EmailVerify/>}/>
        <Route path='reset-password' element={<ResetPassword/>}/>
      </Routes>
      <Footer/>
    </div>
    </div>
    
  )
}

export default App
