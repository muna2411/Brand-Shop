import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './components/Roots';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import AuthProvider from './components/AuthProvider';
import Login from './components/Login';
import Register from './components/Register';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: () => fetch('/Brand.json'),
      },
      {
        path:"/addproduct",
        element:<AddProduct></AddProduct> ,
       },
       {
        path:"/login",
        element:<Login></Login> ,
       },
       {
        path:"/register",
        element:<Register></Register>
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
