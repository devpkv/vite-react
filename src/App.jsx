import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'   
import DigitalClock from './components/useEffect/DigitalClock'

function App() {
  
  return (
    <>
      <div className="App">
        <header className="App-header"> 
        <DigitalClock />
        </header>
      </div>
    </>
  )
}

export default App
