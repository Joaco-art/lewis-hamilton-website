import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return(
    <header className="z-30 bg-black text-white h-24 w-full">
        <nav className='w-full h-full flex flex-row items-center justify-start p-5'>
         
                <Link to="/" className="text-2xl font-bold mr-auto">Lewis Hamilton</Link>
                <button 
                className="md:hidden text-white focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                </button>
                <div className={`md:flex ${isOpen ? 'block' : 'hidden'} ml-auto`}>
                <Link to="/achievements" className="block px-4 py-2 hover:bg-gray-700">Achievements</Link>
                <Link to="/contact" className="block px-4 py-2 hover:bg-gray-700">Career</Link>
                </div>
        </nav>
    </header>
  )}