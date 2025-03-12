import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    return (
        <nav className='navbar'>
            <div className='nav-brand'>
                <Link to='/'><button>Home</button></Link>
                <Link to='/favourites'><button>Favourites</button></Link>
            </div>
        </nav>
    )
}

export default Navbar
