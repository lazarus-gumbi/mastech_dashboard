import React from 'react'
import '../App.css'
import Profile from './Profile'
import { SidebarData } from './SidebarData'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <Profile name='Melusi Gumbi' />
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
  )
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li id='nav' className={isActive ? 'active':''}>
      <Link to={to} {...props} className="side_nav">
        {children}
      </Link>
    </li>
  )
}
