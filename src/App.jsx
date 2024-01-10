import { useState } from 'react'
import './App.css'
import Signup from './pages/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Signup />
    </div>
  )
}

export default App
