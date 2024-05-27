// // app/api/search/route.js
// import { NextResponse } from 'next/server';
// import { promises as fs } from 'fs';

// // export async function GET(request) {
// //     const searchParams = request.nextUrl.searchParams;
// //     const query = searchParams.get('query');

// //     // Read and parse the files inside the GET handler
// //     const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
// //     const data = JSON.parse(file);
// //     const file2 = await fs.readFile(process.cwd() + '/app/data2.json', 'utf8');
// //     const data2 = JSON.parse(file2);

// //     // Perform your logic here, for example fetching data based on the query
// //     const responseData = { message: `You searched for: ${query}`, data, data2 };

// //     // Return the response
// //     return NextResponse.json(responseData);
// // }
// export async function GET(request) {
//     const searchParams = request.nextUrl.searchParams;
//     const query = searchParams.get('query');

//     // Read and parse the files inside the GET handler
//     const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
//     const data =  async (query) => {
//         const apiKey = 'ee7dedc67d978108cbef808c8bb66f46';
//         const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
      
//         try {
//           const response = await axios.get(apiUrl);
//           return response.data; // Return the data from the API response
//         } catch (error) {
//           console.error('Error fetching weather data:', error);
//           throw error; // Re-throw the error to handle it in the calling code
//         }
//       };
//     const data2 = async (query) => {
//         const apiKey = 'ee7dedc67d978108cbef808c8bb66f46';
//         const apiUrl = `https://api.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${apiKey}`;
      
//         try {
//           const response = await axios.get(apiUrl);
//           return response.data; // Return the data from the API response
//         } catch (error) {
//           console.error('Error fetching weather data:', error);
//           throw error; // Re-throw the error to handle it in the calling code
//         }
//       };

//     // Perform your logic here, for example fetching data based on the query
//     const responseData = { message: `You searched for: ${query}`, data, data2 };

//     // Return the response
//     return NextResponse.json(responseData);
// }
import { NextResponse } from 'next/server';
import axios from 'axios';

const fetchCurrentWeather = async (city) => {
  const apiKey = 'ee7dedc67d978108cbef808c8bb66f46';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching current weather data:', error);
    throw error;
  }
};

const fetchForecastWeather = async (city) => {
  const apiKey = 'ee7dedc67d978108cbef808c8bb66f46';
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching forecast weather data:', error);
    throw error;
  }
};

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  try {
    const data = await fetchCurrentWeather(query);
    const data2 = await fetchForecastWeather(query);
    // console.log(data)
    // console.log(data2)

    const responseData = { 
      message: `You searched for: ${query}`,
      data,
      data2
    };

    return NextResponse.json(responseData);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch weather data' }, { status: 500 });
  }
}
