import React, {useState} from 'react'
import Logo from '../mastech_logo1.png'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('')
  return (
    <div className='login-page'>
      <div className="login-card">
      <img src={Logo} alt="" />
      <div className="login-bottom">
        <form className='login-form' action="#">
          <div className="login-form-group">
            <label htmlFor="username"><PersonIcon/></label>
            <input type="text" className='loginCreds' onChange={(e)=>setUsername(e.target.value)} value={username}/>
          </div>
          <div className="login-form-group">
            <label htmlFor="password"><LockIcon/></label>
            <input type="password" className='loginCreds' />
          </div>
          <Link to='home' className='login-btn'>Login</Link>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Login