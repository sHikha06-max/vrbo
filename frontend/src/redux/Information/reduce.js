import { STORE_DATA } from "./actionType";

  const initState = {
      data:[],
  }

  const reducer = (state=initState, action)=>{
      switch(action.type){
           case STORE_DATA:
              return {...state,data :[...action.payload]}
            
              default:
                  return state;
      }
  }

//   export const userRegisterReducer = (state ={}, action) => {
//     switch(action.type){
//     case USER_REGISTER_REQUEST: 
//     return {loading: true};
//     case USER_REGISTER_SUCCESS: 
//     return {loading: false, userInfo: action.payload};
//     case USER_REGISTER_FAIL: 
//     return {loading: false, error: action.payload};
//     default: 
//     return state;
//     }
//    }
   
   export {reducer}