import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Achievements from './components/Achievements'
import './App.css'

export default function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path='/achievements' element={<Achievements/>} />
      </Routes>
    </Router>
    </>
  )
}