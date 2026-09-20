import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
const [vote1, setVote1] = useState(0)
const [vote2, setVote2] = useState(0)
const [vote3, setVote3] = useState(0)


  return (
    <>
      <h1>Voting App</h1>

      <div>
        <button onClick={() => setVote1(vote1 + 1)}>
          vote for candidate 01</button>
        <button  onClick={() => setVote2(vote2 + 1)}>vote for candidate 02</button>
        <button  onClick={() => setVote3(vote3 + 1)}>vote for candidate 03</button>
      </div>
      <h3>Total votes for candidate 01 : {vote1}</h3>
      <h3>Total votes for candidate 02 : {vote2}</h3>
      <h3>Total votes for candidate 03 : {vote3}</h3>

<button onClick={() => {
  setVote1(0)
  setVote2(0)
  setVote3(0)
}}>
  Reset button
</button>
    </>
  )
}

export default App
