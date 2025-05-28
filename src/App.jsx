import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'  
import Counter from './components/useState/Counter'
import MultipleState from './components/useState/MultipleState'

function App() {
  
  return (
    <>
      <div className="App">
        <header className="App-header"> 
        <MultipleState />
        </header>
      </div>
    </>
  )
}

export default App
