import './App.css'
import { RainCloud } from './RainCloud'
import { Puzzle } from './Puzzle'
import { Camera } from './Camera'

function App() {

  return (
    <>

      <header>
        <nav>
          <h2>rickymassa.netlify.app</h2>
          <ul className="nav_options">
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Github</a></li>
            <li><a href="#">Other</a></li>
          </ul>
        </nav>
      </header>
      <h1>Ricky Massa </h1>
      <p> temp </p>
      
      <ul> 
        <li><a target="_blank" href="https://github.com/fmassa1/Weather-Updater"> <RainCloud/> Weather Updater</a> </li>
        <li><a target="_blank" href="https://github.com/fmassa1/Evil-Word-Game"> <Puzzle/> Evil Word Game</a> </li>
        <li><a target="_blank" href="https://github.com/fmassa1/camera-calibration"> <Camera/> Camera Calibration </a></li>

      </ul>
    </>
    
  )
}

export default App
