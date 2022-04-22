import { Button } from "@mui/material"
import { Navbar } from "../Navbar/Navbar"

import "./HeaderImage.css"
const HeaderImage=()=>{
 return <div>
     <div>
     <Navbar/>
     </div>
     <div className="Sticky"> 
          {/* <img className="Home"src="https://odis.homeaway.com/odis/homepage/695564d7-86a5-4b77-9a88-82147910f864.hw11.jpg"/>  */}
          <div className="searchOnImage">
              <div  className="heading">
             <h1>Find your place for together</h1>
             </div>
               <div className="searchForm">
                   <div className="Input"><input type="text" placeholder="Search destination Property ID"></input></div>
                   <div className="Input"><input type="date" placeholder="Check In"></input>
                   <input type="date" placeholder="Check Out"></input></div>
                   <div className="Input"><input type="number" placeholder="Guests"></input></div>
                   <Button>Search</Button>
               </div>
             </div>
    </div>
 </div>
}

export {HeaderImage}