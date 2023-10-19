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
import Users from './components/Users';
import Details from './components/Details';
import Mycart from './components/Mycart';
import Update from './components/Update';

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
       },
       {
        path:'/users',
        element:<Users></Users>,
        loader:() => fetch('http://localhost:5000/users'),
        
      },
      {
        path:'/users/:id',
        element:<Details></Details>,
        loader:({params}) => fetch(`http://localhost:5000/users/${params.id}`)
        
      },
      {
        path:'/mycart',
        element:<Mycart></Mycart>,
        loader:({params}) => fetch(`http://localhost:5000/users/${params.id}`)
      },
      {
        path: 'update/:id',
        element: <Update></Update>,
        loader:({params}) => fetch(`http://localhost:5000/users/${params.id}`)
      },
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
