import { USER_LOGIN_SUCCESS, USER_SIGNUP_SUCCESS } from "./actionType"

const initialState={
    token:""
}

export const reducer=(state=initialState,action)=>{
      const {type,payload}=action

      switch(type){

        case USER_SIGNUP_SUCCESS:{
          return {
            ...state
          }
        }

        case USER_LOGIN_SUCCESS:{
          return {
            ...state,token:payload
          }
        }


        default :
        return state
      }

}