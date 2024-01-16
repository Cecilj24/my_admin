// import { useState } from 'react'
import Home from './pages/home/Home'
import Users from './pages/users/Users'
import Products from './pages/products/Products'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Menu from './components/menu/Menu'
import Login from './pages/login/Login'
import Product from './pages/product/Product'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import "./styles/global.scss"
import User from './pages/user/User'


function App() {
  const Layout = () => {
    return (
      <div className='main'>
        <Navbar />
        <div className='container'>
          <div className='menuContainer'>
            <Menu />
          </div>
          <div className='contentContainer'>
            <Outlet />
          </div>
        </div>
        <Footer />

      </div>
    )
  }



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <Home />
          ),
        },
        {
          path: "/users",
          element: (
            <Users />
          ),
        },
        {
          path: "/products",
          element: (
            <Products />
          ),
        },
        {
          path: "/products/:id",
          element: (
            <Product />
          ),
        },
        {
          path: "/users/:id",
          element: (
            <User />
          ),
        },
      ]
    },
    {
      path: "/login",
      element: (
        <Login />
      )

    }

  ]);

  return <RouterProvider router={router} />;
}

export default App
