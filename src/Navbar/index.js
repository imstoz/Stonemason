import React from 'react'
import { FaBars, FaDribbble } from 'react-icons/fa'
// import { Link as LinkR } from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
import { Nav, NavbarContainer, NavLogo, NavLinks, NavLink, Link, NavItem, MobileIcon, NavMenu } from './NavbarElements'
import Logo from '../images/mark-logo.png'
// import '../../App.css';
import { GrMail, GrGithub } from 'react-icons/gr';




const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLink to="/#home">
                    <img src={Logo} className="Logo" style={{"height" : "55px", "width" : "45px"}}/> 
                    </NavLink>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                        <NavLink to='/#products' smooth={true}>Products</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink to="/#pricing" smooth={true}>Pricing</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink to="/#contact" spy={true} smooth={true}>Contact</NavLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar