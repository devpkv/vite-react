import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'      
import ContextProvider from './components/useContext/ContextProvider'

function App() {
  
  return (
    <>
      <div className="App">
        <header className="App-header"> 
        <ContextProvider />
        </header>
      </div>
    </>
  )
}

export default App
