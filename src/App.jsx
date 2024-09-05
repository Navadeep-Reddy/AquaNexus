import './styles/App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Title from './components/Title'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import Contact from './components/Contact'
import Location_Prob from './components/Location_Prob'

const App = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <Title Title={"Line Chart"} Subtitle={"Graphical representation of aquatic data"} />
      <LineChart GetChartData={GetAllSpeciesCount}/>
      <PieChart GetChartData={GetTotalSpeciesCount} DistrictsLookUp={GetDistrictsLookUp} GetCoordinates={GetDistrictCoordinates} />
      <Location_Prob />
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
  const apiUrl = 'https://fishapiserver.azurewebsites.net/api/population/Total?districtID=3';
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

async function GetDistrictCoordinates() {
  const apiUrl = 'https://fishapiserver.azurewebsites.net/api/allcoordinates';
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
};

async function GetDistrictsLookUp() {
  const apiUrl = 'https://fishapiserver.azurewebsites.net/api/districts';
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
};

export default App
