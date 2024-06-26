import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useToggle } from './hooks/useToggle'

function App() {
  const [toggle,changeToggle] = useToggle()

  

  return (
    <>
      
      <h1>{toggle && "Vite + React"}</h1>
      <div className="card">
        <button onClick={changeToggle}>
          Toggle
        </button>
        
      </div>
      
    </>
  )
}

export default App
