import React from "react";

import { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";




 function PlaceDetail(){
    const[places,setPlaces] = useState([]);
    var someData = JSON.parse(localStorage.getItem("storePlaceData"));
   
    useEffect(()=>{
       
         setPlaces(someData)
        },[])
         
         

  



  return <div>
      <Navbar/>
      <div>
      {places.filter((e)=>{
          if(e.id >= 1) {
             return "empty"
          }
      }).map((e)=>{
         return <div key={e.id}>
             <img src={e.images_url} alt="Home Image" />
            <h3>{e.title}</h3>
            <p>{e.sleep}</p>
            <p>{e.place}</p>
            <p>{e.rating}</p>
            </div>
      })}

    </div>
  </div>
}

export default PlaceDetail