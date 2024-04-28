import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Error from './components/Error';
import AuthProvider from './Providers/AuthProvider';
import Login from './components/Login';
import Register from './components/Register';
import AddProduct from './components/AddProduct';
import PrivateRoutes from './routes/PrivateRoute';
import MyArt_Craft from './components/MyArt_Craft';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:[
      {
        path : '/',
        element: <Home></Home>,
        loader : () => fetch('http://localhost:5000/craft')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path:"/addCraft",
        element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
      }, 
      {
        path:"/art_craft",
        element: <PrivateRoutes><MyArt_Craft></MyArt_Craft> </PrivateRoutes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
