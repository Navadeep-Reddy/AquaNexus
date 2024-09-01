import './styles/App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Title from './components/Title'
import Visual from './components/Visual'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'

const App = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <Title Title={"LineChart"} Subtitle={"Graphical representation of aquatic data"} />
      <LineChart />
      <PieChart />
      
    </div>
  )
}

export default App
