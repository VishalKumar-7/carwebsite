import React from 'react';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import { Nav, NavbarContainer, NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from './Navbar';

const Navbar = ({toggle}) => {
    const toggleHome = ()=>{
        scroll.scrollToTop();
    };
    return (
        <>
        <Nav>
            <NavbarContainer>
               <NavLogo to='/' onClick={toggleHome}>Car</NavLogo>
               <MobileIcon onClick={toggle}>
                   <FaBars />
                </MobileIcon>
                <NavMenu>
                   <NavItem>
                        <NavLinks to='about'>About</NavLinks>
                    </NavItem> 
                    <NavItem>
                        <NavLinks to='discover'>Discover</NavLinks>
                    </NavItem> 
                    <NavItem>
                        <NavLinks to='services'>Services</NavLinks>
                    </NavItem> 
                    
                </NavMenu> 
                <NavBtn>
                    <NavBtnLink to="/">Book Now</NavBtnLink>
                </NavBtn>  
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar;
