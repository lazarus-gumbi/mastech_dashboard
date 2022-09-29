import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../App.css'

function Profile(props) {
    return (
        <div className='profile'>
            <div className='account_icon'><AccountCircleIcon className='accountIcon'/></div>
            <div className="welcome">Welcome,{props.name}</div>
            <div className="account_type">Enterprice</div></div>
    )
}

export default Profile