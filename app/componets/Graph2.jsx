'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

function Graph2({ data2 }) {
    const [temp, setTemp] = useState([]);
    const [dates, setDates] = useState([]);

    useEffect(() => {
        if (data2 && data2.list) {
            const filteredData = data2.list.filter(item => {
                const date = new Date(item.dt * 1000);
                return date.getUTCHours() === 9; // Adjust this according to the timezone of your data
            });

            const newTemps = filteredData.map(item => (parseInt(item.clouds.all)).toFixed(1));
            const newDates = filteredData.map(item => {
                const date = new Date(item.dt * 1000);
                return date.toLocaleDateString('en-US', {
                    day: 'numeric',
                    weekday: 'short',
                    year: 'numeric'
                });
            });

            setTemp(newTemps);
            setDates(newDates);
        }
    }, [data2]);

    return (
        <div className='shadow-xl rounded-lg m-3 p-3'> 
            <Chart
                type="area"
                width={600}
                height={600}
                series={[
                    {
                        name: 'Precipitation ',
                        data: temp
                    }
                ]}
                options={{
                    title: {
                        text: 'Rain Forcast',
                        align: 'center',
                        style: {
                            fontSize: '20px',
                            fontWeight: 'bold',
                            color: '#263238'
                        }
                    },
                    fill: {
                        type: 'gradient',
                        gradient: {
                            shadeIntensity: 1,
                            type: 'vertical',
                            shade: 'dark',
                            gradientToColors: ['#00008B'], // Red for hotter temperatures
                            inverseColors: true,
                            stops: [0, 100],
                            colorStops: []
                        }
                    },
                    colors: ["#00BFFF"], // Blue for colder temperatures
                    
                    chart: { stacked: true },
                    xaxis: {
                        categories: dates,
                        title: {
                            text: 'Date and Time',
                        },
                    },
                    yaxis: {
                        title: {
                            text: 'Precipitation  (%)',
                        },
                        max: 100
                       
                    }
                }}
            />
        </div>
    );
}

export default Graph2;
