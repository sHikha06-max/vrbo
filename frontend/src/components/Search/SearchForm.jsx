import { Button } from "@mui/material";
import "./SearchForm.css"

const SearchForm = ()=>{
    <div className="searchForm">
                   <div className="Input"><input type="text" placeholder="Search destination Property ID"></input></div>
                   <div className="Input"><input type="date" placeholder="Check In"></input>
                   <input type="date" placeholder="Check Out"></input></div>
                   <div className="Input"><input type="number" placeholder="Guests"></input></div>
                   <Button>Search</Button>
               </div>
}

export {SearchForm}