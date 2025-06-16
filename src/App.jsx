import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'        
import Intercepters from './components/API/Interceptors'

function App() {
  
  return (
    <>
      <div className="App">
        <header className="App-header">  
          <Intercepters /> 
        </header>
      </div>
    </>
  )
}

export default App
