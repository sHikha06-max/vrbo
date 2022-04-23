import "./Navbar.css"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowDownOutlined from "@mui/icons-material/KeyboardArrowDownOutlined";
import {Link} from "react-router-dom";
//import {Icon_Flag_US} from 'material-ui-country-flags'
const Navbar = ()=>{
   return <div>
       <div className="mainDiv">
       <div className="image">
       <Link to="/">
           <img className="logo" src="https://csvcus.homeaway.com/rsrcs/cdn-logos/5.8.0/sitename/vrbo/web/logo.svg"/>
           </Link>
       </div>

       <div className="rightDiv">
           <div className="list">
               <div>
                   <FavoriteBorderOutlinedIcon style={{ color: "#15326F", fontSize:"small" }}></FavoriteBorderOutlinedIcon><Link to="/" style={{ textDecoration: 'none', color:"#15326F" }}> Trips Board</Link>
                   </div>

               <div>
                   <PersonOutlineOutlinedIcon style={{ color: "#15326F", fontSize:"small" }}></PersonOutlineOutlinedIcon> <Link to="/loginpage" style={{ textDecoration: 'none', color:"#15326F" }}>Login</Link>
                   <KeyboardArrowDownOutlined style={{ color: "#797979", fontSize:"small" }}></KeyboardArrowDownOutlined>
                   </div>

               <div>
                   <PersonAddAlt1OutlinedIcon style={{ color: "#15326F", fontSize:"small" }}></PersonAddAlt1OutlinedIcon><Link to="/register"style={{ textDecoration: 'none', color:"#15326F" }}>Register</Link>
                   </div>

               <div>
                   <HelpOutlineOutlinedIcon style={{ color: "#15326F", fontSize:"small" }}></HelpOutlineOutlinedIcon><Link to="/"style={{ textDecoration: 'none', color:"#15326F" }}>Help</Link>
                   <KeyboardArrowDownOutlinedIcon style={{ color: "#797979" , fontSize:"small"}}></KeyboardArrowDownOutlinedIcon>
                   </div>

               <div><Link to="/"style={{ textDecoration: 'none', color:"#15326F" }}>USD ($)</Link></div>
               <div>EN</div>
               <div className="box"><Link to="/" style={{ textDecoration: 'none', color:"#15326F" }}>List your Property</Link>
               </div>
           </div>
       </div>
       </div>
   </div>
}

export {Navbar}


