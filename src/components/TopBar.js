import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom'

function TopBar() {
  return (
    <div className='top_bar'>
        <h3>Mastech</h3>
        <Link to="/" className="btn">
            <LogoutIcon fontSize='small'/> Logout
        </Link>
    </div>
  )
}

export default TopBar