import { Link as LinkR } from 'react-router-dom'
import styled from 'styled-components'
// import {Link as LinkS} from 'react-scroll'
import { HashLink as Link } from 'react-router-hash-link';


export const Nav = styled.nav`
    background: white;
    height: 80px;
    width: 100%;
    // margin-bottom: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: fixed;
    top: 0;
    z-index: 10;
    /* animation: top-in 0.5s linear forwards;
    animation-delay: 0.3s;
    opacity: 0; */

    /* @keyframes top-in {
        0% {
          transform: translateY(-90px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        } */

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }

    @media (max-width: 560px) {
        position: fixed;
        z-index: 999;
        background: #fff;
    } 

    @media screen and (max-width: 480px) {
        margin-bottom: 1rem !important;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 1141px;
    padding: 0;
    max-width: 1141px;
    align-items: center;
    position: relative;
    
`

export const NavLogo = styled.div`
    display: flex;
    justify-self: flex-start;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
    color: #fff;
    padding: 20px 4rem;
    @media screen and (max-width: 650px) {
        width: 100%;
        padding: 1rem 2rem;
    }
    `;


export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 920px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #000;
    }
`

export const NavMenu = styled.ul`
top: 1.8rem;
    display: flex;
    position: relative;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 920px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
    color: #000;
    font-weight: 600;
`

export const NavLinks = styled(LinkR)`
    color: #000;
    display: flex;
    flex-flow: row;
    align-items: center;
    text-decoration: none;
    padding: 0 2rem;
    height: 1005;
    cursor: pointer;
    &:hover {
        color: gray;
        transition: 0.2s ease-in-out;
    }
`

export const NavLink = styled(Link)`
    color: #000;
    display: flex;
    flex-flow: row;
    align-items: center;
    text-decoration: none;
    padding: 0 2rem;
    height: 1005;
    cursor: pointer;
    &:hover {
        color: gray;
        transition: 0.2s ease-in-out;
    }
`
