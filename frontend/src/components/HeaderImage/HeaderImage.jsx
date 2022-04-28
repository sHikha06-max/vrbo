import { Button } from "@mui/material"
import { Navbar } from "../Navbar/Navbar"
import { useState,useEffect } from 'react'
import {  useNavigate, Link } from 'react-router-dom'
import { SearchForm } from "../Search/SearchForm"

import "./HeaderImage.css"
import { FooterImage } from "../FooterImage/FooterImage"
import { Footer } from "../Footer/Footer"
import { getData } from "../../redux/Information/action"
import { useSelector,useDispatch } from "react-redux"

const axios = require('axios');


const HeaderImage=()=>{

  const [user,setuser]=useState({
    title:'',
    
})
   const dispatch = useDispatch();

   const change=useNavigate()

   useEffect(() => {
    dispatch(getData);
    //change("/placeDetail");
  }, []);

  const apiData = useSelector((state) => state.reducer.data);

  //console.log(apiData ,"apidata")

function handel(e){

   const {name,value}=e.target

   setuser({

       ...user,
       [name]:value
   })


}

function submit(e){

   e.preventDefault()

//    axios.get("  http://localhost:3004/imagesThree", {
  
//        }).then(resp => {

//    const data = resp.data;
  
//    console.log(resp)
//localStorage.setItem("storePlaceData",JSON.stringify([]))
//    {apiData.map((el)=>{return(
//        <div>{el.place}
//        {/* console.log(el.place, "el.place") */}

// </div>

//    )})
// }
          

       
        } 
           //if(el.place==user.place){
      // localStorage.setItem("storePlaceData",JSON.stringify(el));
          // change.push("/placeDetail")
          //console.log("kk")

        //   var someData  ;
        //   someData = JSON.parse(localStorage.getItem("storePlaceData"));
        //    if(someData==null){
        //   //  localStorage.setItem("storePlaceData",JSON.stringify(el));
        //      someData=[];

            //}

    //        else{
           
    //          someData = JSON.parse(localStorage.getItem("storePlaceData"));
    //          //someData=[];
    //         // someData.push(el)  
    //         // localStorage.setItem("storePlaceData",JSON.stringify(someData));
    //     }
    //      someData.push(el)
    //      localStorage.setItem("storePlaceData",JSON.stringify(someData))
    //     // console.log(someData)
    //    }
      // change("/placeDetail");

       
   //})
//}).catch(error => {

//return "error"
//});
//}

{apiData.map((el)=>{
    return(
            <div><h1>{el.place}</h1>
            <h1>{el.title}</h1>
            <h1>{el.sleep}</h1>
            <h1>{el.popular}</h1>
            {/* console.log(el.place, "el.place") */}
    
     </div>
    
        )})

}
   
  


 return <div>
     <div>
     <Navbar/>
     </div>
     <div className="Sticky"> 
         
          <div className="searchOnImage">
              <div  className="heading">
             <h1>Find your place for together</h1>
             </div>
             <div className="searchForm">
                   <div className="Input"><input type="text" placeholder="Search destination Property ID" name="place" onChange={handel}></input></div>
                   <div className="Input"><input type="date" placeholder="Check In" ></input>
                   <input type="date" placeholder="Check Out" ></input></div>
                   <div className="Input"><input type="number" placeholder="Guests"  ></input></div>
                 
                     <Button onClick={submit}  className="Input">
                          Search
                          </Button>
                          
               </div>
             </div>
    </div>

    <FooterImage/>
    <div>
    <Footer/>
    </div>
 </div>
}

export {HeaderImage}