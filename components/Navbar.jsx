import React, { useState } from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    background-color: #4285F4B2;
    padding: 10px;
    gap: 5px;
    font-family: Google Sans;
    font-size: 16px;
    line-height: 20px;
    @media (min-width: 768px) {
    gap: 50px;
    padding-right: 100px;
    }
    font-family: 'Roboto', sans-serif;
    @media (max-width: 768px) {
        width:100%;
        position:absolute;
        top:0;
        background-color: #7baaf7;
        overflow:hidden;
        flex-direction: column;
        align-items: flex-end;
        height:${({ showNav }) => 
        showNav ? 75 : 350
        }px;
    `

const NavLinks = styled.a`
    padding: 15px;
    font-family: 'Roboto', sans-serif;
    @media (max-width: 768px) {
        display:${({ showNav }) => 
        showNav ? `none` : `block`
        };

    }
    `

const SignIn = styled.a`
    padding: 15px;
    background-color: white;
    border-radius: 10px;
    font-family: 'Roboto', sans-serif;
    @media (max-width: 768px) {
        display:${({ showNav }) => 
        showNav ? `none` : `block`
        };

    }
   
 `

 const Hmburger = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 15px;
  span {
    height: 2px;
    width: 25px;
    background: #000;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (min-width: 768px) {
    display:none;
  }`

export const Navbar = () => {
    const [showNav, setShowNav] = useState(true);
    return (
        <>
            <NavbarContainer showNav={showNav}>
            <Hmburger
          onClick={() => {
            setShowNav(!showNav);
            console.log(showNav);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Hmburger> 
                <NavLinks showNav={showNav} href="/">Home</NavLinks>
                <NavLinks showNav={showNav}  href="/">Events</NavLinks>
                <NavLinks showNav={showNav}  href="/">About Us</NavLinks>
                <NavLinks showNav={showNav}  href="/">FAQs</NavLinks>
                <SignIn showNav={showNav} href="/">Sign In</SignIn>
            </NavbarContainer>
        </>
    )
}