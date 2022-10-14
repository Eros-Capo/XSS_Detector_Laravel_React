import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import Logo from '../../../images/logo xssdetector-02.png';

export const CustomNavbar = ()=>{
    return(
        <>
            <Navbar bg="dark" fixed="top" expand='md' className="justify-content-between align-items-baseline">
                <Navbar.Brand className="float-left">
                    <Link to="/">
                        <img
                            src={Logo}
                            width="30"
                            height="30"
                            className="navbarLogo"
                            alt="XSS Detector Logo"
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white"/>
                <Navbar.Collapse id="basic-navbar-nav" className="navbar-link-position text-nav float-right">
                    <Nav className="nav-pd-mobile">
                        <ul>
                            <li>
                                <NavLink exact to="/">Homepage</NavLink>
                            </li>
                            <li>
                                <NavLink to="/XSSDetector">XSS Detector</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Documentation">Doc</NavLink>
                            </li>
                            <li>
                                <NavLink to="/AboutMe">Who we are</NavLink>
                            </li>
                            <li>
                                <NavLink to="Contacts">Contacts</NavLink>
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}
