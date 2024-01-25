import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RainCloud } from './RainCloud'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Ricky Massa </h1>
      <p> temp </p>
      
      
      <ul> 
        <li><a target="_blank" href="https://github.com/fmassa1/Weather-Updater"> <RainCloud/> Weather Updater</a> </li>
        <li><a target="_blank" href="https://github.com/fmassa1/Evil-Word-Game"> Evil Word Game</a> </li>
        <li><a target="_blank" href="https://github.com/fmassa1/camera-calibration"> Camera Calibration </a></li>

      </ul>
    </>
  )
}

export default App
