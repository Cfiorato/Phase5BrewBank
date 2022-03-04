import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as MdIcons from "react-icons/md"

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'All Breweries',
    path: '/allbrews',
    icon: <FaIcons.FaBeer />,
    cName: 'nav-text'
  },
  {
    title: 'Your Favorites',
    path: '/favorites',
    icon: <MdIcons.MdBookmarks />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/user',
    icon: <FaIcons.FaUserAlt />,
    cName: 'nav-text'
  }
]