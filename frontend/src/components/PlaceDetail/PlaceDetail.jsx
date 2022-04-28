import React from "react";
import { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import {useParams } from 'react-router-dom';
import { getData } from "../../redux/Information/action"
import { useSelector,useDispatch } from "react-redux"
import Book from "../Book/Book";



 function PlaceDetail(){
    const[places,setPlaces] = useState([]);

    const[popular,setPopular]=useState("House");

    const [price,setPrice] = useState("$19");

    const [sort,setSort] = useState([]);



    const dispatch = useDispatch();
    const {id}= useParams();
    const apiData = useSelector((state) => state.reducer.data);
    useEffect(() => {
      dispatch(getData);
      //change("/placeDetail");
    }, []);
  
    console.log(apiData, "aappp")

    function changePopular(popular){
        setPopular(popular)
       

    }
    function changePrice(price){
        setPrice(price)
       

    }

   
    


  return <div>
      <Navbar/>
   {/* {console.log(popular ,"pop")}
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

    </div> */}
   <div>
    {apiData.filter((el)=>el.id==`${id}`)
    .map((el)=>{ return <div>
      <img src ={el.images_url}/>
      <p>{el.title}</p>
      <p>{el.place}</p>
      <p>{el.sleep}</p>
      <p>{el.popular}</p>
      <p>{el.price}</p>
      <p>{el.rating}</p>
      </div>})
    
    }
    </div>

    <Book/>
  </div>
}

export default PlaceDetail