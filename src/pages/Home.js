import React from 'react'
import Sidebar from '../components/Sidebar'
import TopBar from '../components/TopBar';
import { Outlet,useLocation} from 'react-router-dom'

export const Home = () => {
  return (
<div className="home">
    <div className="left"><Sidebar product_name='Sky SMS' username='Melusi'/></div>
        <div className="right">
          <div className="right-top">
            <TopBar />
          </div>
          <div className="right-bottom">
            <Outlet/>
          </div>
        </div>
      </div>
  )
}
