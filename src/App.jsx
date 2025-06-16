import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'        
import ReactHookForm from './components/Forms/ReactHookForm'

function App() {
  
  return (
    <>
      <div className="App">
        <header className="App-header">  
          <ReactHookForm /> 
        </header>
      </div>
    </>
  )
}

export default App
