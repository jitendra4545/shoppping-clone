import { PRODUCT_GET_SUCCESS } from "./actionTypes"

let initialData={
    count:0,
    products:[]
}


export const reducer=(state=initialData,action)=>{

    const {type,payload}=action

    switch(type){
        
        case PRODUCT_GET_SUCCESS:{
            return {
                ...state,products:payload
            }
        }

        default :
        return state
    }


}