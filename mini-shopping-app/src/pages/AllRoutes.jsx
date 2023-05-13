import React from 'react'
import { Route, Routes } from 'react-router-dom'
import  UserLogin  from '../components/UserLogin'
import  UserSignup  from '../components/UserSignup'
import { HomePage } from './HomePage'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/userlogin' element={<UserLogin/>} />
        <Route path='/usersignup' element={<UserSignup/>} />
    </Routes>
  )
}
