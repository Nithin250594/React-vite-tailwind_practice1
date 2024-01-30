import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const initialColor= "linear-gradient(to right,violet, indigo, blue, green, yellow, orange, red)"
  const [color, setColor] = useState(initialColor)
  const [bgInitial, setBg]= useState(true)

  return (
<div className='w-full h-screen' style={ bgInitial? {backgroundImage: color} : {backgroundColor: color}}>
  <div className='fixed flex flex-wrap justify-center bottom-12 rounded-3xl inset-x-0 px-2'>
    <div className='flex flex-wrap justify-center bg-white px-3 py-2 gap-3 rounded-3xl '>
      <button className='outline-none px-3 py-1 rounded-3xl bg-violet-500' onClick={()=>(setColor("violet") ,setBg(false))}>
        Violet
      </button>
      <button className='outline-none px-3 py-1 rounded-3xl bg-indigo-500' onClick={()=> (setColor("indigo"), setBg(false))}>
        Indigo
      </button>
      <button className='outline-none px-3 py-1 rounded-3xl bg-blue-500' onClick={()=> (setColor("blue"),  setBg(false))}>
        Blue
      </button>
      <button className='outline-none px-3 py-1 rounded-3xl bg-green-500' onClick={()=> (setColor("green"),  setBg(false))}>
        Green
      </button>
      <button className='outline-none px-3 py-1 rounded-3xl bg-yellow-500' onClick={()=> (setColor("yellow"),  setBg(false))}>
        Yellow
      </button>
      <button className='outline-none px-3 py-1 rounded-3xl bg-orange-500' onClick={()=> (setColor("orange"),  setBg(false))}>
        Orange
      </button>
      <button className='outline-none px-3 py-1 rounded-3xl bg-red-500' onClick={()=> (setColor("red"),  setBg(false))}>
        Red
      </button>

    </div>

  </div>
  
</div>
  )
}

export default App
