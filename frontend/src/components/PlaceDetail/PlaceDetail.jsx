import React from "react";

import { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";




 function PlaceDetail(){
    const[places,setPlaces] = useState([]);

    const[popular,setPopular]=useState("House");

    const [price,setPrice] = useState("$19");

    const [sort,setSort] = useState([]);

    function changePopular(popular){
        setPopular(popular)
       

    }
    function changePrice(price){
        setPrice(price)
       

    }

   
    var someData = JSON.parse(localStorage.getItem("storePlaceData"));
   
    useEffect(()=>{
       
         setPlaces(someData)
        },[])
      
        
         useEffect(()=>{
             let newData=[];
            // let  dataGet = JSON.parse(localStorage.getItem("storePlaceData"));
             console.log(someData, "someData")
               let mappData=someData.map(function(el){
                   console.log(el.popular, popular)
                   console.log(el.price, price , "price")
                   if(el.popular==popular && el.price == price){
                       newData.push(el)
              
                   }
      
               })
               console.log(newData,"newdata")
               localStorage.setItem("filteredData",JSON.stringify(newData))
            let filter=   JSON.parse(localStorage.getItem("filteredData"));
            setSort(filter)
           
         },[popular,price])


  return <div>
      <Navbar/>
   {/* {console.log(popular ,"pop")} */}
      <select  onChange={(e)=>{changePopular(e.target.value)}}name="popular" id="popular" value={popular}>
                  <option value="House">House</option>
               <option value="Condo">Condo</option>
             <option value="Villa">Villa</option>
           <option value="Apartments">Apartments</option>
              </select>

              <select  onChange={(e)=>{changePrice(e.target.value)}}name="price" id="price" value={price}>
                  <option value="$19">$19</option>
               <option value="$20">$20</option>
             <option value="$21">$21</option>
          
              </select>
      <div>
      {sort.map((e)=>{
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