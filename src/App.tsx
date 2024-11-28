import { useState } from 'react'
import './App.css'

function App() {

  const [next, setNext] = useState(1)
  return (
    <>
      <div>
        <h1>ReferenceIT</h1>

        <img src={`../public/${next}.png`} alt={`${next}.png`}/>

        <button onClick={()=> {
            if(next === 1){
              setNext(4)
              return
            }
            setNext(next-1)
          }}>BEFORE</button>
          
        <button onClick={()=> {
            if(next === 4){
              setNext(1)
              return
            }
            setNext(next+1)
          }}>NEXT</button>
      </div>
    </>
  )
}

export default App
