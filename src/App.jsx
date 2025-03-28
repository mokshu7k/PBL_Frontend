import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage />,
    childern: [

    ]
  }
])

function App() {
  

  return (
    <>
      <div className='bg-red-100 w-full h-3xl'> huifweh</div>
    </>
  )
}

export default App
