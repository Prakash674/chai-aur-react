import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter,setCounter]= useState(0)
// let counter=1

const addValue=()=>{
  // console.log("value added",Math.random());
  console.log("clicked",counter)
  if(counter=== 20){
  setCounter=("Error")
  console.log('Error Occurred')
}
else{
  setCounter(counter+1)

}
  // counter =counter+1;

}

const removeValue=()=>{
  // console.log("value added",Math.random());
  // console.log("clicked",counter)
  // counter =counter-1;
  if(counter=== 0){
    setCounter=("Error")
    console.log('Error Occurred')
  }
  else{
    setCounter(counter-1)
  
  }

  // setCounter(counter)
} 


  return (
    <>
   <h1>chai or react</h1>
   <h2>Counter Value :{counter}</h2>
   <button onClick={addValue}>Add Value</button> <br/><br/>
   <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
