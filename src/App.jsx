import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {


  const callServer=async ()=>{

  const response= await fetch("http://localhost:3000/greetings")

    console.log("response  ",response)


  const result=await response.text()

  console.log("result is   ",result)


  }
  return (
    <>
     <button onClick={callServer}>

      Call Server
     </button>
    </>
  )
}

export default App
