import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'       
import CounterExample from './components/customHooks/CounterExample'

function App() {
  
  return (
    <>
      <div className="App">
        <header className="App-header"> 
        <CounterExample />
        </header>
      </div>
    </>
  )
}

export default App
