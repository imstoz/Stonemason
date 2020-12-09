import styled from 'styled-components'
// import {Link as LinkS} from 'react-scroll'
import {FaTimes} from 'react-icons/fa';
import { Link as LinkR} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100% -80px;
    background: #fff;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: #000;
`

export const Icon = styled.div`
    position: absolute;
    padding: 1%;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #fff;
`

export const SidebarMenu = styled.ul`
    margin-top: 2rem;    
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    @media screen and (max-width: 480px)
    {
       grid-template-rows: repeat(4, 80px); 
    }
`

// export const SidebarLinks = styled(LinkR)`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 1.5rem;
//     text-decoration: none;
//     transition: 0.2s ease-in-out;
//     text-decoration: none;
//     color: #000;
//     font-weight: 600;
//     cursor: pointer;
//     &:hover {
//         color: gray;
//         transition: 0.2s ease-in-out;
//     }
// `

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #000;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        color: gray;
        transition: 0.2s ease-in-out;
    }
`

export const SidebarLinkE = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 1.5rem;
    text-decoration: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    &:hover {
        color: gray;
        transition: 0.2s ease-in-out;
    }
    
`


