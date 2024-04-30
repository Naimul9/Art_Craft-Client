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
import Art_Craft from './components/Art_Craft';
import ViewDetail from './components/ViewDetail';
import UpdateCraft from './components/UpdateCraft';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:[
      {
        path : '/',
        element: <Home></Home>,
        loader : () => fetch('https://assignment-10-server-one-puce.vercel.app/craft')
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
      },
      {
        path : '/all_item',
        element: <Art_Craft></Art_Craft>,
        loader : () => fetch('https://assignment-10-server-one-puce.vercel.app/craft')
      },
      {
        path: '/view_detail/:id',
        element: <PrivateRoutes><ViewDetail></ViewDetail></PrivateRoutes>,
        loader : () => fetch('https://assignment-10-server-one-puce.vercel.app/craft')
      },
      {
        path:'/updateCraft/:id',
        element: <UpdateCraft></UpdateCraft>,
        loader: ({params})=> fetch(`https://assignment-10-server-one-puce.vercel.app/craft/${params.id}`)
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
