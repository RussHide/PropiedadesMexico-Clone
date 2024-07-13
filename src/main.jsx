import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ClientLayout, ClientHome } from './Pages/Client'


const router = createBrowserRouter([
  {
    path: '/',
    element: <ClientLayout />,
    children: [
      { path: 'inicio', element: <ClientHome /> },
    ],
  },
  /*   { path: '*', element: <PageNotFound /> }, */
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)