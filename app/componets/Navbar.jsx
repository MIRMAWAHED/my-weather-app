'use client'
import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='h-10 bg-purple-400 '>
      <ul className='flex justify-center items-center h-full text-white	text-2xl	text-bold'>
        <li>
           <Link href="/">Weather App</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
