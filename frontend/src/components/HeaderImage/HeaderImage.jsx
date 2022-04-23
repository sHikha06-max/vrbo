import { Button } from "@mui/material"
import { Navbar } from "../Navbar/Navbar"
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { SearchForm } from "../Search/SearchForm"

import "./HeaderImage.css"



const axios = require('axios');


const HeaderImage=()=>{

  const [user,setuser]=useState({
    title:'',
    
})

   const change=useHistory()




function handel(e){

   const {name,value}=e.target

   setuser({

       ...user,
       [name]:value
   })


}

function submit(e){

   e.preventDefault()

   axios.get("  http://localhost:3000/imagesThree", {
  
       }).then(resp => {

   const data = resp.data;
  
//    console.log(resp)
   data.map(function(el){
       if(el.title==user.title){
      // localStorage.setItem("storePlaceData",JSON.stringify(el));
          // change.push("/placeDetail")
          //console.log("kk")

          var someData ;
          someData = JSON.parse(localStorage.getItem("storePlaceData"));
           if(someData==null){
          //  localStorage.setItem("storePlaceData",JSON.stringify(el));
             someData=[];

           }
           else{
             someData = JSON.parse(localStorage.getItem("storePlaceData"));
            // someData.push(el)  
            // localStorage.setItem("storePlaceData",JSON.stringify(someData));
        }
         someData.push(el)
         localStorage.setItem("storePlaceData",JSON.stringify(someData))
        // console.log(someData)
       }
       change.push("/placeDetail")

       
   })
}).catch(error => {

return "error"
});
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
                   <div className="Input"><input type="text" placeholder="Search destination Property ID" name="title" onChange={handel}></input></div>
                   <div className="Input"><input type="date" placeholder="Check In" ></input>
                   <input type="date" placeholder="Check Out" ></input></div>
                   <div className="Input"><input type="number" placeholder="Guests"  ></input></div>
                   <Button onClick={submit}>Search</Button>
               </div>
             </div>
    </div>
 </div>
}

export {HeaderImage}