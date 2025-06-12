import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'        
import AxiosAPICallExample from './components/API/AxiosAPICallExample'

function App() {
  
  return (
    <>
      <div className="App">
        <header className="App-header">  
          <AxiosAPICallExample /> 
        </header>
      </div>
    </>
  )
}

export default App
