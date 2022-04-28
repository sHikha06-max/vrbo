import "./App.css"
import {Header} from "./components/Header/Header";
import Login from "./components/Login/Login";
import {Navbar} from "./components/Navbar/Navbar";
import { ImageNavbar, NavbarImage } from "./components/Navbar/NavbarImage";
import  Register  from "./components/Register/Register";
import { Link, Route, Router, Routes, withRouter } from 'react-router-dom'
import { HeaderImage } from "./components/HeaderImage/HeaderImage";
import  PlaceDetail  from "./components/PlaceDetail/PlaceDetail";
import { FooterImage } from "./components/FooterImage/FooterImage";

function App() {
  return (
    <div className="App">
      

       <Routes>
       
        <Route  path='/'  element={<HeaderImage/>} />
        <Route  path='/header'  element={<Header/>} />
        <Route  path='/placeDetail/:id'  element={<PlaceDetail/>} />
        <Route   path='/loginpage' element={<Login/>}  />
        <Route  path='/register' element={<Register/>} />
       
        </Routes>
       
        

       
        
    </div>
  );
}

export default App;
