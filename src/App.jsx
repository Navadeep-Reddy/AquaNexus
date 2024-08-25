import './styles/App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Title from './components/Title'

const App = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <Title Title={"Search"} Subtitle={"Choose the species of fish"} />
    </div>
  )
}

export default App
