import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeScreen from './components/Homescreen/Homescreen'
import Login from './components/Login/Login'
import Signup from './components/SignUp/Signup'
import Homepage from './components/Homepage/Homepage'
import setVideoState from './components/Hooks/setVideoState'

function App() {

  const [load, setLoad] = setVideoState();

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/homepage' element={<Homepage />} />
      </Routes> 
    </BrowserRouter>
    
  )
}

export default App
