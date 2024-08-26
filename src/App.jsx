import './styles/App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Title from './components/Title'
import Visual from './components/Visual'

const App = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <Title Title={"Select"} Subtitle={"Choose the required data"} />
      <Visual />
    </div>
  )
}

export default App
