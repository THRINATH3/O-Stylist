import React from 'react'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import RootLayout from './RootLayout';
import Home from './components/home/Home';
import About from './components/about/About';
import Login from './components/login/Login';
import Register from './components/register/Register';
import RoutingError from './RoutingError';
import Occasion from './components/occasion/Occasion';
import Profile from './components/profile/Profile';
function App() {

  //creating  the routing...

  const broswerRouter=createBrowserRouter([
    {
      path:'',
      element:<RootLayout></RootLayout>,
      errorElement:<RoutingError></RoutingError>,
      children:[
        {
          path:'',
          element:<Home></Home>
        },
        {
          path:'about',
          element:<About></About>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'occasion',
          element:<Occasion></Occasion>
        },
        {
          path:'profile',
          element:<Profile></Profile>
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={broswerRouter}></RouterProvider>
    </div>
  )
}

export default App;