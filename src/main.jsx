import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Home/Home';
import Education from './Pages/education/Education';
import Skills from './Pages/Skills/Skills';
import Experience from './Pages/Experience/Experience';
import Project from './Pages/project/Project';
import Contact from './Pages/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/skills',
        element: <Skills></Skills>,
      },
      {
        path: '/experience',
        element: <Experience></Experience>,
      },
      {
        path: '/project',
        element: <Project></Project>,
      },
      {
        path: '/education',
        element: <Education></Education>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
