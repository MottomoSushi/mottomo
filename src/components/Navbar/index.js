import React from 'react';
import {Nav, NavLink, NavIcon, Bars} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to='/mottomo'>Mottomo Sushi</NavLink>
            </Nav>
            <NavIcon onClick={toggle}>
                <p>Menu</p>
                <Bars />
            </NavIcon>

        </>
    );
}

export default Navbar