import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa"
import { Link } from "react-router-dom"
import { SidebarData } from './SidebarData'
import './Navbar.css'
import { IconContext } from 'react-icons'
import SignIn from './SignIn'


function Navbar({ user, logOut }) {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  const [login, setLogin] = useState(false)
  const [send, setSend] = useState('#')


  function handleLog(){
    if (user !== null) {
      setSend('/')
      logOut()
    }else{
      setSend('#')
      setLogin(true)
    }
  }

  console.log(user)

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick = {showSidebar}/>
        </Link>
        <h1 className="navbar-title">Brew Bank</h1>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick = {showSidebar}>
          <li className='nav-text' onClick={handleLog}>
            <Link to={send}>
              {user !== null ? <FaIcons.FaSignOutAlt/> : <FaIcons.FaSignInAlt/>}
              <span>{user !== null ? 'Sign Out' : 'Sign In/Sign Up'}</span>
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return(
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </IconContext.Provider>
    <SignIn login={login} setLogin={setLogin} />
    </>
  )
}


export default Navbar