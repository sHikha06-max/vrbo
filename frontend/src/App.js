import "./App.css"
import {Header} from "./components/Header/Header";
import Login from "./components/Login/Login";
import {Navbar} from "./components/Navbar/Navbar";
import { ImageNavbar, NavbarImage } from "./components/Navbar/NavbarImage";
import  Register  from "./components/Register/Register";
import { Link, Route, Router, Switch } from 'react-router-dom'
import { HeaderImage } from "./components/HeaderImage/HeaderImage";
import  PlaceDetail  from "./components/PlaceDetail/PlaceDetail";

function App() {
  return (
    <div className="App">
      

       
        <Switch>
        
        <Route exact path='/'  component={HeaderImage} />
        <Route  path='/placeDetail'  component={PlaceDetail} />
        <Route   path='/loginpage' component={Login}  />
        <Route path='/register' component={Register} />
        
        </Switch>
        

       
        
    </div>
  );
}

export default App;
