'use client'
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import  { useState, useEffect } from 'react';
// const columns = [
//     { field: 'id', headerName: 'ID', width: 90 },
//     { field: 'name', headerName: 'Name', width: 150 },
//     { field: 'age', headerName: 'Age', width: 110 },
//     { field: 'address', headerName: 'Address', width: 160 },
// ];
const columns = [
    { field: 'dateTime', headerName: 'Date and Time', width: 250 },
    { field: 'temp', headerName: 'Temperature', width: 150 },
    { field: 'description', headerName: 'Description', width: 200 },
  ];
  
// const rows = [
//     // { id: 1, name: 'John Doe', age: 28 },
//     // { id: 2, name: 'Jane Smith', age: 34},
//     // { id: 3, name: 'Jane Smith', age: 34},
//     // { id: 4, name: 'Jane Smith', age: 34 },
//     // { id: 5, name: 'Jane Smith', age: 34},
//     // { id: 6, name: 'Jane Smith', age: 34},
//     // { id: 7, name: 'Jane Smith', age: 3},
//     // Add more rows as needed
// ];
const Table = (data2) => {
    // console.log("data2", data2)
    const [rows, setRows] = useState([]);

    useEffect(() => {
      const newRows = data2.data2.list.map((item, index) => ({
        id: index + 1,
        dateTime: new Date(item.dt * 1000).toUTCString(),
        temp: `${(parseInt(item.main.temp) - 273.15).toFixed(1)} C `,
        description: item.weather[0].description,
      }));
      setRows(newRows);
    }, [data2]);
    return (
        <div className='shadow-xl rounded-lg m-3 p-3'>
            <h2 className='text-center font-bold text-xl'>Forcast Table for 6 days</h2>
            <div style={{ height: 500, width: '100%' }}>
                <DataGrid rows={rows}
                    columns={columns}
                    pageSize={7}
                    pagination
                    autoHeight={false}
                    autoPageSize />
            </div>

        </div>
    )
}

export default Table
