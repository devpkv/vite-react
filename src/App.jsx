import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'  
import Counter from './components/useState/Counter'

function App() {
  
  return (
    <>
      <div className="App">
        <header className="App-header"> 
        <Counter />
        </header>
      </div>
    </>
  )
}

export default App
