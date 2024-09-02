import './styles/App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Title from './components/Title'
import Visual from './components/Visual'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import Contact from './components/Contact'

const App = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <Title Title={"Line Chart"} Subtitle={"Graphical representation of aquatic data"} />
      <LineChart />
      <Title Title={"Pie Chart"} Subtitle={"Graphical representation of aquatic data"} />
      <PieChart />
      <Contact />
    </div>
  )
}

export default App
