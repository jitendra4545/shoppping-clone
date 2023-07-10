import axios from "axios"
import { PRODUCT_GET_SUCCESS } from "./actionTypes"



const getProductSuccess=(payload)=>{
    return {
        type:PRODUCT_GET_SUCCESS,payload
    }
}




export const getProduct=()=>(dispatch)=>{

    axios.get(`http://localhost:8000/product/`)
    .then((res)=>{
        console.log(res.data)
        dispatch(getProductSuccess(res.data))
    }).catch(err=>console.log(err))

}