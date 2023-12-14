import React from 'react'
import "./navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='nav'>
    <div className='part-1'>

    <div className='mui'>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
    <MenuIcon style={{color:"#FFFFFF"}} className='menu'/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>About</MenuItem>
        <MenuItem onClick={handleClose}>Services</MenuItem>
        <MenuItem onClick={handleClose}>Pricing</MenuItem>
        <MenuItem onClick={handleClose}>Testimonials</MenuItem>

      </Menu>
    </div>

       <p>Host Beta </p>
    </div>
    <div className='part-2'>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Testimonials</li>
        </ul>
    </div>
    <div className='part-3'>
      <div className='border'>
      <p className='contact'>
            Contact us
        </p>
      </div>
      
    </div>

 
    </div>
   
  )
}

export default Navbar
