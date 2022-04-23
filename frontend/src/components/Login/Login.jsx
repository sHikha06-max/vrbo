

import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Login.css'
import Button from '@mui/material/Button';
import { Navbar } from '../Navbar/Navbar';
import { NavbarImage } from '../Navbar/NavbarImage';
import Checkbox from '@mui/material/Checkbox';
import { FormControl, FormControlLabel, FormGroup } from '@mui/material';



const axios = require('axios');


function Login() {

 const [user,setuser]=useState({
     mobile:'',
     password:''
 })

    const change=useHistory()

function signuphandel(){

    change.push('/signup')
}


function handel(e){

    const {name,value}=e.target

    setuser({

        ...user,
        [name]:value
    })


}

function submit(e){

    e.preventDefault()

    axios.get(" http://localhost:3000/user", {
   
        
        
        

}).then(resp => {

    const data = resp.data;

    data.map(function(el){
        if(el.email==user.email&& el.password==user.password){
            change.push("/")
        }
        
    })
}).catch(error => {

return "error"
});
}

    return (
        
        <div className='loginbox'>
            <NavbarImage/>
            
            <div className='innerdiv'>
               <h2>Sign In</h2>
            <input className='inputBox' onChange={handel} name='email' placeholder='Enter Email'/>
           
            </div>
            <div className='innerdiv'>
               
            <input className='inputBox' onChange={handel} name='password' placeholder='Enter password'/>
            </div>
            
            <div className='innerdiv'>
            <FormControlLabel
          value="end"
          className='checked'
          control={<Checkbox />}
          label="Keep me signed in."
          labelPlacement="end"
        />
        
           </div>
           <div className='innerdiv'>
            <p style={{marginLeft:"50px"}}>By signing in, I agree to the Vrbo <a href='#' style={{textDecoration:"none",color:"#15326F"}}>Terms and Conditions</a> and <a href='#' style={{textDecoration:"none",color:"#15326F"}}> Privacy Statement</a>.</p>
            <div className='butdiv'>
            <Button className='logbutton' onClick={submit}  variant="contained" >Log In</Button>
            </div>
            <p>Don't have an account? <a href = "/register" style={{textDecoration:"none",color:"#15326F"}}>Create One</a></p>
            </div>
        </div>
    )
}

export default Login