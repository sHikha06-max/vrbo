import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';






function Book() {
    const change=useNavigate();

    function submit(e){
        e.preventDefault();
        alert("Your booking has been successful")
        change("/")
    }  
  return (
    <div>
        <Button onClick= {submit}variant='contained'>Book Now</Button>
    </div>
  )
}

export default Book