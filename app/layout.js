import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navbar from "./componets/Navbar";
import { Montserrat } from "next/font/google";
const montserrat=Montserrat({subsets:['latin']})
const inter = Inter({ subsets: ["latin"] });

// app/layout.js (or app/layout.tsx)
export const metadata = {
  title: 'Your App Title',
  description: 'Your App Description',
  // icons: {
  //   icon: [
  //     {
  //       rel: 'stylesheet',
  //       href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css',
  //       integrity: 'sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==',
  //       crossOrigin: 'anonymous',
  //       referrerPolicy: 'no-referrer'
  //     }
  //   ]
  // }
};




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" 
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" 
          crossorigin="anonymous" 
          referrerpolicy="no-referrer" 
        />
      </head>
      <body className={montserrat.className}>
      
        <Navbar />
        {children}
      </body>
    </html>
  );
}
