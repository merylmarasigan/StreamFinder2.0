import React from "react";
import './Home.css'
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
    <div className='container'>
        <h1>StreamFinder</h1>
        <div className="btns">
            <Link to ='/findTV'><button>Find TV Show</button></Link>
            <Link to ='/findMovie'><button>Find Movie</button></Link>
        </div>
    </div>)
    ;
}

export default NavBar;