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
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import SignUp from './Pages/SignUpPage/SignUp';
import SignIn from './Pages/SignInPage/SignIn';
import AboutPage from './Pages/AboutPage/AboutPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'signin',
        element: <SignIn></SignIn>
      },
      {
        path: 'about',
        element: <AboutPage></AboutPage>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <AuthProvider>
      <DarkModeProvider>
        <RouterProvider router={router} />
      </DarkModeProvider>
    </AuthProvider>
  </StrictMode>,
)
