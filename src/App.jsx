import './styles/App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Title from './components/Title'
import Visual from './components/Visual'
import Charts from './components/Charts'

const App = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <Title Title={"Charts"} Subtitle={"Graphical representation of aquatic data"} />
      <Charts />
      <Title Title={"Filter"} Subtitle={"Choose the required data"} />
      <Visual />
    </div>
  )
}

export default App
