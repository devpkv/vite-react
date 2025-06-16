import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'        
import CustomAxiosAPI from './components/API/CustomAxiosAPI'

function App() {
  
  return (
    <>
      <div className="App">
        <header className="App-header">  
          <CustomAxiosAPI /> 
        </header>
      </div>
    </>
  )
}

export default App
