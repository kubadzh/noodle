import React from 'react'
import { Nav, NavLink, NavIcon, Bars } from './NavElements'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Noodles</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    );
}

export default Navbar;