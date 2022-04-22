import "./App.css"
import {Header} from "./components/Header/Header";
import Login from "./components/Login/Login";
import {Navbar} from "./components/Navbar/Navbar";
import { ImageNavbar, NavbarImage } from "./components/Navbar/NavbarImage";
import  Register  from "./components/Register/Register";
import { Link, Route, Router, Switch } from 'react-router-dom'
import { HeaderImage } from "./components/HeaderImage/HeaderImage";

function App() {
  return (
    <div className="App">
      {/* React */}
      
      {/* <Header/> */}
       {/* <Navbar/>  */}
      {/* <Register/>
        */}
{/* <Switch>
<Route exact path='/'  component={Login} /> 


 <Route  path = '/register' component={Register}/> 
</Switch> */}
       {/* <ImageNavbar/> */}

{/* <NavbarImage/> */}
<HeaderImage/>
       
        {/* <Login/>   */}
    </div>
  );
}

export default App;
