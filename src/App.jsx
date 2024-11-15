import { useState } from 'react'
import Todo from "./components/Todo"
import Header from './components/Header'
//import InlineComponent from './components/InlineComponent'
//import OutlineComponent from './components/OutlineComponent'
import './App.css'

function App() {
  
  return (
    <div className="App">
       
    {/*<InlineComponent/>
    <OutlineComponent/>*/}
    <Header/>
    <Todo/>
    </div>
  )
}

export default App
