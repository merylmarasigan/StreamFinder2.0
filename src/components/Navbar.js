import React from 'react';
import './Navbar.css'
import '../index.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className='navbar'>
            <div className='navbar-title'>
                <Link to='/'>StreamFinder</Link>
            </div>
            <div>
                <Link to='/findTV'> Find Series</Link>
                <Link to='/findMovie'> Find Movie</Link>
            </div>
            
        </div>
    );
    
};

export default Navbar;