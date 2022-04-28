import { Button } from "@mui/material"
import { Navbar } from "../Navbar/Navbar"
import { useState,useEffect } from 'react'
import {  useNavigate, Link,useParams } from 'react-router-dom'
import { SearchForm } from "../Search/SearchForm"

import "./HeaderImage.css"
import { FooterImage } from "../FooterImage/FooterImage"
import { Footer } from "../Footer/Footer"
import { getData } from "../../redux/Information/action"
import { useSelector,useDispatch } from "react-redux"

const axios = require('axios');


const HeaderImage=()=>{

  const [user,setUser]=useState("");
   const dispatch = useDispatch();
    const {id}= useParams();


   console.log(user, "user")
   const change=useNavigate()
  

   useEffect(() => {
    dispatch(getData);
    //change("/placeDetail");
  }, []);

  const apiData = useSelector((state) => state.reducer.data);

  //console.log(apiData ,"apidata")

// function handel(e){

//    const {name,value}=e.target

//    setuser({

//        ...user,
//        [name]:value
//    })


//}

function submit(e){

   e.preventDefault()
 
    apiData.filter((el)=>{
       if(el.place == user){
         return el;
         
       }
      // console.log(el, "else")
    }).
    map((el)=>{ return change(`/placeDetail/${el.id}`)})
     

    

       
        } 
//        // words.filter(word => word.length > 6); 
//        const filterItems = (arr, query) => {
//          return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
//        }       

// {apiData.filter(el =>el.place==title){
 
            
//              console.log(el.place, "el.place") 
    
  
//        }
       

//}
   
  


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
                   <div className="Input"><input type="text" placeholder="Search destination Property ID" name="place" onChange={(el)=>setUser(el.target.value)}></input></div>
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