

import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
//import './loginpage.css'
import Button from '@mui/material/Button';
import { Navbar } from '../Navbar/Navbar';



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
            change.push("/register")
        }
        
    })
    

 
 




   

}).catch(error => {

return "error"


});


}

    return (
        
        <div className='loginbox'>
            <Navbar></Navbar>
            <label className='loginhead'>LOGIN</label>
            <div className='innerdiv'>
                <h5 className='logla'>email</h5>
            <input className='i' onChange={handel} name='email'/>
            </div>
            <div className='innerdiv'>
                <h5 className='logla'>PASSWORD</h5>
            <input className='i' onChange={handel} name='password'/>
            </div>

            
            
            <h5 style={{marginLeft:"50px"}}>By signing in, I agree to the Vrbo Terms and Conditions and Privacy Statement.<span style={{color:"rgb(255, 217, 0)",textDecoration: "underline",fontSize:"15px"}} onClick={signuphandel} >Sign up</span></h5>
            <div className='butdiv'>
            <Button className='logbutton' onClick={submit}  variant="contained">Log In</Button>
            </div>
        </div>
    )
}

export default Login