import { IS_LOADING,LOG_IN,IS_ERROR } from "./actionType.js";


let init = {isloading:false,iserror:false,login:false}


export const Login = (state=init, { type, payload })=>{
    switch (type){
        case IS_LOADING:
            return (
                {
                    ...state,
                    isloading:true
                }
            );
        case IS_ERROR:
            return (
                {
                    ...state,
                    iserror:payload,
                    isloading: false
                }
            );
        case LOG_IN:
            return (
                {
                    ...state,
                    login:payload,
                    isloading: false,
                    iserror:false
                }
            );  
        default:
            return state;    
    }
}