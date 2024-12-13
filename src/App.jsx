// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from './components/Sidebar';
import Playbar from './components/Playbar'
import MainComponent from './components/MainComponent';



function App() {
  

  return (
    <>
      <Sidebar/>
      <MainComponent/>
      <Playbar/>
 
    </>
  )
}

export default App
