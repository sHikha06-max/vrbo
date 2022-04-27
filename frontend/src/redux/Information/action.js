import { STORE_DATA } from "./actionType"




   
export const storeData  =(payload)=>{

    return {
        type: STORE_DATA,
        payload:payload
    }
}


export const registerData = (payload)=>{
    return {
        type: REGISTER_DATA,
        payload:payload
    }
}