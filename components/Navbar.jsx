import React from "react";
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
    `

const NavLinks = styled.a`
    padding: 15px;
    `

const SignIn = styled.a`
    padding: 15px;
    background-color: white;
    border-radius: 10px;
    `

export const Navbar = () => {
    return (
        <>
            <NavbarContainer>
                <NavLinks href="/">Home</NavLinks>
                <NavLinks href="/">Events</NavLinks>
                <NavLinks href="/">About Us</NavLinks>
                <NavLinks href="/">FAQs</NavLinks>
                <SignIn href="/">Sign In</SignIn>
            </NavbarContainer>
        </>
    )
}