import { useState } from 'react'
import Titulo from './components/Titulo'
import Add from './components/Add';
import FormContainer from './components/FormContainer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="main_container">

       <Titulo />  
       <Add/>
       <FormContainer/>


      </div>

  </>
  )
}

export default App
