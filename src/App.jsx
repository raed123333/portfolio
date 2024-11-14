import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Hero/>
    <About/>
    </>
  )
}

export default App
