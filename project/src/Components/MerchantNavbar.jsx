import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const MerchantNavbar = () => {
  return (
    <nav className='headermenu'>
      <h1></h1>
      <h1>
        <NavLink to="/login">
          login ?
        </NavLink></h1>
      <h1>
        <NavLink to="/order" >
         Order ?
        </NavLink></h1><h1>
        <NavLink to="/product" >
         Products 
        </NavLink></h1>
    </nav>

    
  )
}

export default MerchantNavbar
