
import {useState} from "react"
function App() {
  const [color, setcolor] = useState("olive")

  return (

  <div className="w-full h-screen duration-200"
  style={{backgroundColor:color,}}>

<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
  <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-lg px-3 py-2 ">

    <button className="outline-none px-4 py-1 rounded-full text-white " style={{backgroundColor:"red"}} onClick={()=>{setcolor("red")}}>Red</button>

   
    <button className="outline-none px-4 py-1 rounded-full text-white " style={{backgroundColor:"Green"}} onClick={()=>{setcolor("Green")}}>Green</button>

    <button className="outline-none px-4 py-1 rounded-full text-white " style={{backgroundColor:"Blue"}} onClick={()=>{setcolor("Blue")}}>Blue</button>

    <button className="outline-none px-4 py-1 rounded-full text-white " style={{backgroundColor:"Grey"}} onClick={()=>{setcolor("Grey")}}>Grey</button>

    <button className="outline-none px-4 py-1 rounded-full text-white " style={{backgroundColor:"gold"}} onClick={()=>{setcolor("gold")}}>Gold</button>
  </div>
</div>

  </div>

  )
}

export default App
