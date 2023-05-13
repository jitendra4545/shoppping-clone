import { USER_LOGIN_SUCCESS, USER_SIGNUP_SUCCESS } from "./actionType"
import axios from 'axios'
const userSignupSuccess=()=>{
    return {
        type:USER_SIGNUP_SUCCESS
    }
}


const userLoginSuccess=(payload)=>{
return {
    type:USER_LOGIN_SUCCESS,payload
}
}



export const userSignup=(Name,Email,Mobile,Password,ConfirmPassword)=>(dispatch)=>{
    const payload={
        Name,
        Email,
        Mobile,
        Password,
        ConfirmPassword
    } 
   return axios.post(`http://localhost:8000/register`,payload)
     .then((res)=>{
        console.log(res)
           dispatch(userSignupSuccess())
     }).catch(err=>console.log(err))
}