import { STORE_DATA } from "./actionType"
//import  {REGISTER_DATA} from "./actionType"
const axios = require("axios");




   
export const storeData  =(payload)=>({

     
        type: STORE_DATA,
        payload:payload
     
});





export const getData = (dispatch) => {
    axios
      .get("https://data-images-server.herokuapp.com/imagesThree")
      .then((res) => {
        console.log(res.data , "res.data.data");
        //console.log("Shikah")
        dispatch(storeData(res.data));
      })
      .catch((err) => console.log(err));
  };
  