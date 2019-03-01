import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <NavLink exact to="/">Smurfs</NavLink>
            <NavLink exact to="/smurf-form">Add Smurf</NavLink>
        </div>
    )
}

export default NavBar
