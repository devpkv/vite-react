import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'   
import TwiceIncrement from './components/useState/TwiceIncrement'

function App() {
  
  return (
    <>
      <div className="App">
        <header className="App-header"> 
        <TwiceIncrement />
        </header>
      </div>
    </>
  )
}

export default App
