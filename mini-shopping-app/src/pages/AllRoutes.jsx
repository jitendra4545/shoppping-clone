import React from 'react'
import { Route, Routes } from 'react-router-dom'
import  UserLogin  from '../components/UserLogin'
import  UserSignup  from '../components/UserSignup'
import { HomePage } from './HomePage'
import { Gift } from './Gift'
import { Beauty } from './Beauty'
import { Men } from './Men'
import { Women } from './Women'
import { HomeKitchen } from './Home&Kitchen'
import { Kid } from './Kid'
import { ProductPage } from './ProductPage'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/Kid' element={<Kid/>} />
        <Route path='/Gift' element={<Gift/>} />
        <Route path='/Beauty' element={<Beauty/>} />
        <Route path='/Men' element={<Men/>} />
        <Route path='/Women' element={<Women/>} />
        <Route path='/Homekitchen' element={<HomeKitchen/>} />
        <Route path='/userlogin' element={<UserLogin/>} />
        <Route path='/usersignup' element={<UserSignup/>} />
        <Route path='/products' element={<ProductPage/>} />
    </Routes>
  )
}
