import React from 'react'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Portfolio from '../src/Portfolio/Portfolio';
import Layout from './layout/Layout';

export default function App() {

  const router=createBrowserRouter ([
{
  path:'/',
  element:<Layout/>,
  children:[ 
    {path:'/',element:<Home/>},
    {path:'/About',element:<About/>},
    { path:'/Contact',element:<Contact/>},
    {path:'/Portfolio', element:<Portfolio/>},
  ]
}


  ]) 
  return (
    <>
 
      <RouterProvider router={router}/>
    </>
  )
}
