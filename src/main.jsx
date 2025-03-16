import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import MainLayout from './Layouts/MainLayout';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { DarkModeProvider } from './Contexts/DarkModeProvider/DarkModeProvider';
import HomePage from './Pages/HomePage/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <DarkModeProvider>
    <RouterProvider router={router} />
    </DarkModeProvider>
  </StrictMode>,
)
