

import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Image } from 'mui-image'

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import "../../Images/vrbo.png"
import { IconFlagUS} from 'material-ui-flags';




const Navbar=()=> {


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <Image src="vrbo.png"/>
          </Typography>
         
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large"  color="inherit">
             
              <FavoriteBorderOutlinedIcon/>
                <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Trip Boards
          </Typography>
            
              </IconButton>


            <IconButton
              size="large"
            
              color="inherit"
            >
             
                <PermIdentityOutlinedIcon/>

                <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Log in
            <KeyboardArrowDownOutlinedIcon />
          </Typography>
             
            </IconButton>


            <IconButton
              size="small"
           
              aria-label="account of current user"
             aria-haspopup="true"
           
              color="inherit"
            >
              <PersonAddAltOutlinedIcon />
              <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Sign Up
          </Typography>
            </IconButton>


            <IconButton
              size="small" 
              aria-label="account of current user"
           
              aria-haspopup="true"
          
              color="inherit"
            >
              <HelpOutlineOutlinedIcon />
              <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Help
            <KeyboardArrowDownOutlinedIcon />
          </Typography>
            </IconButton>


            <IconButton
              size="small"
            
              aria-label="account of current user"
            
              aria-haspopup="true"
           
              color="inherit"
            >
              <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
             
            USD ($)
         </Typography>
            </IconButton>

            <IconButton
              size="small"
           
              aria-label="account of current user"
           
              aria-haspopup="true"
           
              color="inherit"
            >
              <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
             <IconButton> <IconFlagUS /></IconButton>
            EN
         </Typography>
            </IconButton>

            <Button variant="outlined" color="error">List your property</Button>

            


          </Box>
         
        </Toolbar>
      </AppBar>
     
    </Box>
  );
}

export {Navbar}


