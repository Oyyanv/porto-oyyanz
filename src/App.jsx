import React from 'react';
import './App.css'
import LandingPage from './assets/pages';
import About from './assets/pages/about';



function App() {

  return (
    <>
    <div className="overflow-x-hidden overflow-y-hidden">
      <div className='flex flex-col items-center justify-center h-screen bg-[#000000] text-white'>
        <LandingPage />
      </div>
      <div className='flex items-center justify-center min-h-screen bg-[#151515] text-white'>
        <About />
      </div>
    </div>
    </>
  )
}

export default App
