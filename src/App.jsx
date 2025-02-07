import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import MyProfile from './pages/MyProfile'
import MyAppointment from './pages/MyAppointment'
import { NavBar } from './components/NavBar'

const App = () => {
  return (

    <div className='app-cont'>
      <NavBar />
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/doctors' element = {<Doctors />} />
        <Route path = '/doctors/:speciality' element = {<Doctors />} />     
        <Route path = '/login' element = {<Login />} />
        <Route path = '/about' element = {<About />} />
        <Route path = '/contact' element = {<Contact />} />
        <Route path = '/my-profile' element = {<MyProfile />} />
        <Route path = '/my-appointments' element = {<MyAppointment />} />
        <Route path = '/appointment/:docId' element = {<Appointment />} />

      </Routes>
    </div>
  )
}

export default App