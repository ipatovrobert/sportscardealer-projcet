import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar'>
                <div className='container'>
                    <div className='navbar-container'>
                        <div className='navbar-logo'>
                            <Link to='/' className='navbar-logo-title'>Sports Car Dealer</Link>
                        </div>
                        <div className='navbar-items'>
                            <Link to='/' className='navbar-items--specific'>Dealers</Link>
                            <Link to='/promotion' className='navbar-items--specific'>Promotion</Link>
                            <Link to='/contact' className='navbar-items--specific'>Contact</Link>
                            <Link to='/about' className='navbar-items--specific'>About us</Link>
                        </div>
                    </div>
                </div> 
        </div>
    )
}

export default Navbar
