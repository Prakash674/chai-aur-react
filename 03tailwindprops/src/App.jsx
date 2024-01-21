import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  let myObj={
    username:"hitesh",
    age:21
  }
  return (
    <>
<h1 className='bg-slate-500 text-white p-4 mb-4'>Tailwind Test</h1>
<Card username="chaiaurcode" btnText="Click me" />
<Card username="Beatiful"  btnText="Visit me " />
    </>
  )
}

export default App
