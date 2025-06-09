import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'   
import ColorPicker from './components/useState/ColorPicker'

function App() {
  
  return (
    <>
      <div className="App">
        <header className="App-header"> 
        <ColorPicker />
        </header>
      </div>
    </>
  )
}

export default App
