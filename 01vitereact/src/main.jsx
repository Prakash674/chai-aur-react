import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
return(
  <div>
    <h1>
      Custom App!
    </h1>
  </div>
)
}
const username="Chai aur code"
//Reactt Create Element

const reactElement=React.createElement('a',{href:'https://arthum.co.in',target:'_blank'},'click to visit this Site ',)



ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)
