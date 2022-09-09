import React from 'react'
import "./sidebar.css"
import * as FaIcons from "react-icons/fa"

const Sidebar = () => {
  return (
    <section className='sidebar-section'>

    <ul className='sidebar-links-wrapper'>
      <li className='links sidebar-links'> <FaIcons.FaBook className='icons sidebar-icon'/> <span>Notes</span></li>
      <li className='links sidebar-links'> <FaIcons.FaClock className='icons sidebar-icon'/> <span>Reminders</span></li>
      <li className='links sidebar-links'> <FaIcons.FaSave className='icons sidebar-icon'/> <span>Draft</span></li>
      <li className='links sidebar-links'> <FaIcons.FaTrash className='icons sidebar-icon'/> <span>Trash</span></li> 
    </ul>

    </section>
  )
}

export {Sidebar}