import React from 'react'
import '../App.css'
import Profile from './Profile'
import { SidebarData } from './SidebarData'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import Logo from '../mastech_logo1.png'

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="sidebar_container">
        <div className="sidebar_top">
          <Profile name={props.username} />
          <div className="navigation">
            <h4>{props.product_name}</h4>
          </div>
          <ul>
            {SidebarData.map((val, key) => {

              return (

                <CustomLink key={key} to={val.link}>
                  <div className="icon">{val.icon}</div>
                  <div className="title">{val.title}</div>
                </CustomLink>


              )
            })}
          </ul>
        </div>
        <div className="sidebar_bottom">
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  )
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li id='nav' className={isActive ? 'active' : ''}>
      <Link to={to} {...props} className="side_nav">
        {children}
      </Link>
    </li>
  )
}
