import React from 'react'
import { Route, Routes } from 'react-router-dom'
import  {UserLogin}  from '../components/UserLogin'
import  UserSignup  from '../components/UserSignup'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/userlogin' element={<UserLogin/>} />
        <Route path='/usersignup' element={<UserSignup/>} />
    </Routes>
  )
}
