import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Main from './components/Main.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Projects from './pages/Projects.jsx'
import { RouterProvider } from 'react-router-dom'
import Certificates from './pages/Certificates.jsx'

const routerPath = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main/>
      },
      {
        path: "/projects",
        element: <Projects/>
      },
      {
        path: "/certificates",
        element: <Certificates/>
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routerPath} />
  </React.StrictMode>,
)
