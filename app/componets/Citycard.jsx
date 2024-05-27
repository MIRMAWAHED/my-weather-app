'use client'

import React from 'react'
const getUTCTime = (date) => {
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();

    // Format time components with leading zero if needed
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedHours} : ${formattedMinutes} : ${formattedSeconds}`;
}
const getUTCDate = (date) => {
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1; // Months are zero-based
    const day = date.getUTCDate();

    // Format date components with leading zero if needed
    const formattedMonth = String(month).padStart(2, '0');
    const formattedDay = String(day).padStart(2, '0');

    return `${formattedDay}/${formattedMonth}/${year} `;
}
const Citycard = (data) => {
    const sunriseTime = new Date(parseInt(data.data['sys']['sunrise']) * 1000); // Note: JavaScript timestamps are in milliseconds, so multiply by 1000
    const sunsetTime = new Date(parseInt(data.data['sys']['sunset']) * 1000);
    const dt = new Date(parseInt(data.data['dt']) * 1000);
    return (
        <div className='shadow-xl  rounded-lg m-3 p-3 grid grid-cols-2 gap-x-8 gap-y-4'>

            <h5 className='text-5xl  flex justify-center items-center '>{((parseInt(data.data['main']['temp']) - 273.15) * 1.8 + 32).toFixed(1)}&deg;F / {(parseInt(data.data.main.temp) - 273.15).toFixed(1)}&deg;C </h5>
            <h3 className='text-xl flex justify-end items-center m-3'><p className='text-2xl'>{data.data.name}<br />{getUTCDate(dt)}</p> </h3>
            <p className='col-span-2 text-xl'>Feels Like {(parseInt(data.data['main']['feels_like']) - 273.15).toFixed(1)} &deg;C. {data.data['weather'][0]['description']}.</p>
            <p className='text-xl'>
                <i className="text-3xl fa-solid fa-temperature-low "></i> {(parseInt(data.data['main']['temp_min']) - 273.15).toFixed(1)} &deg;C<br />
                min temp</p>
            <p className='text-xl'>
                <i className="text-3xl fa-solid fa-temperature-high "></i>{(parseInt(data.data['main']['temp_max']) - 273.15).toFixed(1)} &deg;C<br />
                max temp</p>

            <p className='text-xl'><i className="text-3xl fa-solid fa-wind"></i> {data.data['wind']['speed']} m/s <br />wind speed</p>
            <p className='text-xl'>{data.data['main']['pressure']} hPa<br />
                pressure</p>
            <p className='text-xl'><i className="text-3xl fa-solid fa-droplet"> </i>  {data.data['main']['humidity']}% <br />humidity</p>

            <p className='text-xl'><i className="text-3xl fa-solid fa-cloud"></i>  {data.data['clouds']['all']}%<br />clouds</p>
            <p className='text-xl'>{getUTCTime(sunriseTime)} <br />sunrise</p>
            <p className='text-xl'>{getUTCTime(sunsetTime)} <br />sunset</p>
        </div>
    )
}

export default Citycard
