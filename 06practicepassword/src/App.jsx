import { useCallback, useEffect, useRef, useState } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)

const [password, setPassword]=useState("");


// useref hook
const passwordRef=useRef(null);


const Generator=useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZasbcdefghijklmnopqrstuvwxyz"
  if(numberAllowed ) str  +=  "0123456789"
  if(charAllowed ) str  +=   "!@#$%^&*()`~{}[]\|?/ "
  
  for(let i=1;i<=length;i++){
    let char= Math.floor(Math.random()*str.length+1)
    pass+= str.charAt(char);
  // console.log("ji")
  }
  setPassword(pass)
  
},[length,numberAllowed,charAllowed]);



const copyPasswordToClipBoard=useCallback(()=>{
  //this is for optional for better UI for User 
passwordRef.current?.select();

  //ends here
  window.navigator.clipboard.writeText(password);
},[password])





useEffect(()=>{
  Generator()
},[length,numberAllowed,charAllowed,Generator])


  return (
    <>
  <div className="w-full  max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 ">
    <h1 className='text-white text-center my-3'> Password Generator</h1>
<div className="flex shadow rounded-lg overflow-hidden mb-4 ">
  <input type="text"
  className="outline-none w-full py-1 px-3"
  placeholder='Password'
value={password}
ref={passwordRef}
readOnly

  />
<button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 ' onClick={copyPasswordToClipBoard }>Copy</button>
</div>


<div className="flex text-sm gap-x-2">
  <div className='flex items-center gap-x-1'>
    <input type="range"
    min={6}
    max={100}
    value={length}
    className='cursor-pointer'
    onChange={(e)=>setLength(e.target.value)}
    />
    <label>Length:{length}</label>
  </div>
  <div className="flex items-center  gap-x-2">
    <input 
    type="checkbox"
    defaultChecked={numberAllowed}
    id="numberInput"
    onChange={()=>{setnumberAllowed((prev)=>!prev)}}
    />   <label>Numbers</label>
  </div>

  <div className="flex items-center  gap-x-2">
  <input
   type="checkbox"
   defaultChecked={charAllowed}
    className='cursor-pointer'
    onChange={()=>{setcharAllowed((prev)=>!prev)}}
    />   <label>char</label>
  </div>

</div>

  </div>

    </>
  )
}

export default App;
