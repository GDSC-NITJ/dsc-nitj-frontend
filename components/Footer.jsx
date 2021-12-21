import React from "react";
import styled from "styled-components";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Wrapper = styled.div`
    font-family: 'Roboto', sans-serif;
    background: #0F0F0F;
    padding: 30px 100px;
    color: white;
    @media(max-width:560px){
        display: flex;
        padding: 30px 50px;
    }
`;

const Content = styled.div`
    display: flex;
    gap: 350px;
    @media(max-width:560px){
        flex-direction: column;
        gap: 0;
    }
`;

const Contact = styled.div`
    display: flex;
    flex-direction: column;
`;

const Links = styled.div`
    display: flex;
    gap: 200px;
    @media(max-width:560px){
        flex-direction: column;
        gap: 0;
    }
`;

const Explore = styled.div`
    font-weight: bold;
`;

const About = styled.div`
    font-weight: bold;
`;

const Hrefs = styled.div`
    display: flex;
    flex-direction: column;
`;

const Icons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
`;

export const Footer = () => {
    return (
        <Wrapper>
            <Content>
                <Links>
                    <Explore>
                        <h2>Explore</h2>
                        <Hrefs>
                            <a href="#" style={{ marginBottom: '20px', fontWeight: 'normal' }}>CP Quest</a>
                            <a href="#" style={{ marginBottom: '20px', fontWeight: 'normal' }}>Events</a>
                            <a href="#" style={{ marginBottom: '20px', fontWeight: 'normal' }}>Team Members</a>
                            <a href="#" style={{ marginBottom: '20px', fontWeight: 'normal' }}>Projects</a>
                        </Hrefs>
                    </Explore>
                    <About>
                        <h2>About</h2>
                        <Hrefs>
                            <a href="#" style={{ marginBottom: '20px', fontWeight: 'normal' }}>DSC NITJ</a>
                            <a href="#" style={{ marginBottom: '20px', fontWeight: 'normal' }}>NIT Jalandhar</a>
                            <a href="#" style={{ marginBottom: '20px', fontWeight: 'normal' }}>Team Members</a>
                        </Hrefs>
                    </About>
                </Links>
                <Contact>
                    <h2>Contact Us</h2>
                    <Icons>
                        <a href="#" style={{ color: "#5865F2" }}><FaDiscord /></a>
                        <a href="#" style={{ color: "#0e76a8", background: "#fff", height: '15px', width: '16px' }}><FaLinkedin /></a>
                        <a href="#" style={{ color: "#cd486b" }}><FaInstagram /></a>
                        <a href="#" style={{ marginBottom: '20px', fontWeight: 'normal' }}><FaGithub /></a>
                        <a href="#" style={{ color: "#FF0000" }}><FaYoutube /></a>
                        <a href="#" style={{ color: "#4267B2" }}><FaFacebook /></a>
                        <a href="#" style={{ marginBottom: '20px', fontWeight: 'normal' }}><MdOutlineEmail /></a>
                    </Icons>
                </Contact>
            </Content>
        </Wrapper>
    );
};