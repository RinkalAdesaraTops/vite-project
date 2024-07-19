import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirebaseCrud from './FirebaseCrud'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Firebase CRUD Example</h3>
      <FirebaseCrud />
    </>
  )
}

export default App
