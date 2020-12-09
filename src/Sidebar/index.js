import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarLinks} from './SidebarElements'
import { GrMail, GrGithub } from 'react-icons/gr';
import { FaDribbble } from 'react-icons/fa'


const Sidebar = ( {isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/#home">Home</SidebarLink>
                    <SidebarLink to="/#products">Products</SidebarLink>
                    <SidebarLink to="/#pricing">Pricing</SidebarLink>
                    <SidebarLink to="/#contact">Contact</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;