import React from 'react';
import Button from '@mui/material/Button'
import './navbar.css'

const  Navbar = (props) => {
    let content = props.isLoggedIn
    ?<ul className="header-list">
        <li className='header-item'>Home</li>
        <li className='header-item'>Write</li>  
        <li className='header-item'>Profile</li>
        <li className='header-item'>Dashboard</li>
        <li className='header-item'>Logout</li>  
        
    </ul>
    : <ul className="header-list">
    <li className='header-item'>Home</li>
    <li className='header-item'>Login</li>
    <li className='header-item'>Register</li>
    <li className='header-item'>Search</li>  
</ul>
    return (
        <div className= "header">
            {content}
        </div>
    )
    
}

export default Navbar
