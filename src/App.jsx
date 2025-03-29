import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/RootLayout.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Register from './pages/Register.jsx'
import Elections from './pages/Elections.jsx'
import ElectionDetails from './pages/ElectionDetails.jsx'
import Candidates from './pages/Candidates.jsx'
import Congrats from './pages/Congrats.jsx'
import Results from './pages/Results.jsx'
import Login from './pages/Login.jsx'
import Landing from './pages/Landing.jsx'
import About from './pages/About.jsx'
import Candidate from './pages/Candidate.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path:"login",
        element:<Login />
      },
      {
        path: "register",
        element: <Register/>
      },
      {
        path:"about",
        element: <About />
      },
      {
        path: "results",
        element: <Results />
      },
      {
        path: "elections",
        element: <Elections />
      },
      {
        path: "election/:id",
        element: <ElectionDetails/>
      },
      {
        path:"elections/:id/candidates",
        element: <Candidates />
      },
      {
        path: "congrats",
        element: <Congrats/>
      },

    ]
  }
])

function App() {
  

  return (
    <>
      <RouterProvider router= {router} />
    </>
  )
}

export default App
