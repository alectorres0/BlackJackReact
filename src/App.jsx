import { useState } from 'react'
import './App.css'
import GamePage from './Components/GamePage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <GamePage />
  )
}

export default App
