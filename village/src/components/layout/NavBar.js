import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = props => {
    return (
        <div className="navigation">
            <NavLink exact to="/">Smurfs</NavLink>
            <NavLink exact to="/smurf-form">{props.updatedSmurf ? 'Update ' : 'Add '} Smurf</NavLink>
        </div>
    )
}

export default NavBar
