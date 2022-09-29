import React from 'react'
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';


function TopBar() {
  return (
    <div className='top_bar'>
        <h3>Mastech</h3>
        <a href="#" className="btn">
            <LogoutIcon fontSize='small'/> Logout
        </a>
    </div>
  )
}

export default TopBar