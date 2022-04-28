import React from 'react'
import { useState } from 'react'
import { useHistory, useNavigate } from 'react-router-dom'
import { FormControl, FormControlLabel, FormGroup } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { NavbarImage } from '../Navbar/NavbarImage';
import "./Register.css"


const axios = require('axios');


function Register() {

 const [user,setuser]=useState({
     email:'',
     password:'',
     first_name:"",
     last_name:"",
 })

    const change=useNavigate()




function handel(e){

    const {name,value}=e.target

    setuser({

        ...user,
        [name]:value
    })


}

function submit(e){

    e.preventDefault()
    const w={
        name:user.name,
        email:user.email
    }

    axios.post("https://data-images-server.herokuapp.com/user", {
   
          email: user.email,
          password:user.password,
          first_name:user.first_name,
          last_name: user.last_name,
      
        
        

}).then(resp => {
    console.log(resp)
    change("/");
}).catch(error => {

return "error"


});


}

    return (
        <div className='loginbox'>
          <NavbarImage/>

          <div className='innerdiv'>
            <h2>Creat an account</h2>

            <div className='innerdiv'>

              <input className='inputBox' onChange={handel} name='email' placeholder='Enter Email'/>
             </div>

             <div className='innerdiv'>
               
               <input className='inputBox' onChange={handel} name='first_name' placeholder='First name'/>
               </div>
           
            <div className='innerdiv'>
            <input className='inputBox' onChange={handel} name='last_name' placeholder='Last name'/>
            </div>
            

            

           
            <div className='innerdiv'>

            <input className='inputBox' onChange={handel} name='password' placeholder='Password'/>
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
            <p style={{marginLeft:"50px"}}>By creating an account, I agree to the Vrbo <a href='#' style={{textDecoration:"none",color:"#15326F"}}>Terms and Conditions</a> and <a href='#' style={{textDecoration:"none",color:"#15326F"}}> Privacy Statement</a>.</p>
            <div className='butdiv'>
            <Button className='logbutton' onClick={submit}  variant="contained" >Continue</Button>
            </div>
            <p>Don't have an account? <a href = "/loginPage" style={{textDecoration:"none",color:"#15326F"}}>Sign In</a></p>
            </div>

        </div>
        </div>
    )
}

export default Register

