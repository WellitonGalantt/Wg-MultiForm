import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import FormStep1Page from './pages/FormStep1/FormStep1.tsx'
import FormStep2Page from './pages/FormStep2/FormStep2.tsx'
import FormStep3Page from './pages/FormStep3/FormStep3.tsx'
import App from './App.tsx'
import FormStep4Page from './pages/FormStep4/FormStep4.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children:[
      {
        path:'/step1',
        element: <FormStep1Page />
      },
      {
        path:'/step2',
        element: <FormStep2Page />
      },
      {
        path:'/step3',
        element: <FormStep3Page />
      },
      {
        path:'/step4',
        element: <FormStep4Page />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
