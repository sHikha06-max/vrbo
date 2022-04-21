import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Button from '@mui/material/Button';


const axios = require('axios');


function Register() {

 const [user,setuser]=useState({
     email:'',
     password:'',
     first_name:"",
     last_name:"",
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
    const w={
        name:user.name,
        email:user.email
    }

    axios.post(" http://localhost:3000/user", {
   
          email: user.email,
          password:user.password,
          first_name:user.first_name,
          last_name: user.last_name,
      
        
        

}).then(resp => {

  

    console.log(resp)

 
 




   

}).catch(error => {

return "error"


});


}

    return (
        <div className='loginbox'>
            <label className='loginhead'>Creat an account</label>
            <div className='innerdiv'>
                <h5 className='logla'>First name</h5>
            <input className='i' onChange={handel} name='first_name'/>
            </div>
            <div className='innerdiv'>
                <h5 className='logla'>Last name</h5>
            <input className='i' onChange={handel} name='last_name'/>
            </div>
            <div className='innerdiv'>
                <h5 className='logla'>Email</h5>
            <input className='i' onChange={handel} name='email'/>
            </div>
            <div className='innerdiv'>
                <h5 className='logla'>PASSWORD</h5>
            <input className='i' onChange={handel} name='password'/>
            </div>

           
            
            <h5 style={{marginLeft:"50px"}}>By creating an account, I agree to the Vrbo Terms and Conditions and Privacy Statement.</h5>
            <div className='butdiv'>
            <Button className='logbutton' onClick={submit}  variant="contained">Continue</Button>
            </div>
        </div>
    )
}

export default Register

