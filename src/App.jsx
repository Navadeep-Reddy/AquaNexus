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
      <LineChart GetChartData={GetAllSpeciesCount}/>
      <Title Title={"Pie Chart"} Subtitle={"Graphical representation of aquatic data"} />
      <PieChart GetChartData={GetTotalSpeciesCount} />
      <Contact />
    </div>
  )
}

async function GetAllSpeciesCount() {
  const apiUrl = 'https://fishapiserver.azurewebsites.net/api/population/species/alltime?districtID=1';
  try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data['jsonfile'];
  } catch (error) {
      console.error('Error:', error);
      throw error; // Re-throw the error to be handled by the caller
  }
}

async function GetTotalSpeciesCount() {
  const apiUrl = 'https://fishapiserver.azurewebsites.net/api/population/Total?districtID=1';
  try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data['jsonfile'];
  } catch (error) {
      console.error('Error:', error);
      throw error; // Re-throw the error to be handled by the caller
  }
}

export default App
