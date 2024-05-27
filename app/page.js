// 'use client'
// import Image from "next/image";
// import Citycard from "./componets/Citycard";
// // import { promises as fs } from 'fs';
// import Table from "./componets/Table";
// import Graph from "./componets/Graph";
// import Graph2 from "./componets/Graph2";
// import { useState } from "react";

// // const data=['a']
// export default async function Home() {
//   // const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
//   // const data = JSON.parse(file);
//   // const file2 = await fs.readFile(process.cwd() + '/app/data2.json', 'utf8');
//   // const data2 = JSON.parse(file2);
//   // console.log("data ="+data2.cod)
//   const [city, setCity] = useState('');
//   const [weatherData, setWeatherData] = useState(null);

//   const handleCityChange = async (event) => {
//       const selectedCity = event.target.value;
//       setCity(selectedCity);

//       try {
//           const response = await axios.get(`/api/search?query=${selectedCity}`);
//           setWeatherData(response.data);
//       } catch (error) {
//           console.error('Error fetching weather data:', error);
//       }
//   };

//   return (
//     <div className="grid grid-cols-2 gap-0">
//       {/* <h2 className="col-span-2 text-center text-3xl">{data.name}</h2> */}

//       <div>
//         <select value={city} onChange={handleCityChange}>
//           <option value="">Select a city</option>
//           <option value="London">London</option>
//           <option value="New York">New York</option>
//           <option value="Paris">Paris</option>

//         </select>


//       </div>

//       <Citycard data={weatherData.data}/>
//    <Graph  data2={weatherData.data2}/>
//    <Graph2 data2={weatherData.data2}/>
//    <Table data2={weatherData.data2}/>

//     </div>
//   );
// }
'use client'
import Image from "next/image";
import Citycard from "./componets/Citycard";
import Table from "./componets/Table";
import Graph from "./componets/Graph";
import Graph2 from "./componets/Graph2";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function Home() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // New state for loading

  const handleCityChange = async (event) => {
    const selectedCity = event.target.value;
    
    setCity(selectedCity);
    if (!selectedCity) {
      // If no city is selected, return early
      console.log("no")
      return;
    }
    setLoading(true);
      try {
        const response = await axios.get(`/api/search?query=${selectedCity}`);
        setWeatherData(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError('Error fetching weather data');
      }finally{
        setLoading(false);
      }
    };
  //   try {
  //     // Simulate a delay for testing the loading state
  //     setTimeout(async () => {
  //       try {
  //         const response = await axios.get(`/api/search?query=${selectedCity}`);
  //         setWeatherData(response.data);
  //         setError(null);
  //       } catch (error) {
  //         console.error('Error fetching weather data:', error);
  //         setError('Error fetching weather data');
  //       } finally {
  //         setLoading(false);
  //       }
  //     }, 2000); // 2 seconds delay
  //   } catch (error) {
  //     console.error('Error in setTimeout:', error);
  //     setLoading(false);
  //   }
  // };
  return (
    <div >
      <div className="flex justify-center m-11 custom-select">
        <select className="text-2xl text-purple-400" value={city} onChange={handleCityChange}>
          <option value="">Select a city</option>
          <option value="London">London</option>
          <option value="New York">New York</option>
          <option value="Paris">Paris</option>
          <option value="Hyderabad">Hyderabad</option>
        </select>
        <button value={city} onClick={handleCityChange}>Refresh</button>
      </div>
      <div className="grid grid-cols-2 gap-0">


        {loading && (
          <>
            <div className="shadow-xl h-96 rounded-lg m-3 p-3 flex justify-center items-center" ><div class="loader"></div></div>
            <div className="shadow-xl h-96 rounded-lg m-3 p-3 flex justify-center items-center"><div class="loader"></div></div>
            <div className="shadow-xl h-96 rounded-lg m-3 p-3 flex justify-center items-center"><div class="loader"></div></div>
            <div className="shadow-xl h-96 rounded-lg m-3 p-3 flex justify-center items-center"><div class="loader"></div></div>
          </>
        )}
        {error && <p>{error} 000</p>}

        {weatherData && (
          <>
            <Citycard data={weatherData.data} />
            <Graph data2={weatherData.data2} />
            <Graph2 data2={weatherData.data2} />
            <Table data2={weatherData.data2} />
          </>
        )}
      </div>
    </div>
  );
}
