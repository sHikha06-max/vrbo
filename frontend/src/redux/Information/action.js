import { STORE_DATA } from "./actionType"
//import  {REGISTER_DATA} from "./actionType"
const axios = require("axios");




   
export const storeData  =(payload)=>({

     
        type: STORE_DATA,
        payload:payload
     
});


// export const registerData = (payload)=>{
//     return {
//         type: REGISTER_DATA,
//         payload:payload
//     }
// }

// export const isLoading = ()=>({
//     type: IS_LOADING,
    
// });

// export const isSignup = (data)=>({
//     type: SIGN_UP,
//     payload: data
// });

// export const isError = (data)=>({
//     type: IS_ERROR,
//     payload: data
// });


export const getData = (dispatch) => {
    axios
      .get(" http://localhost:3004/imagesThree")
      .then((res) => {
        console.log(res.data , "res.data.data");
        //console.log("Shikah")
        dispatch(storeData(res.data));
      })
      .catch((err) => console.log(err));
  };
  