import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    font-family: 'Roboto', sans-serif;
    background: #0F0F0F;
    padding: 30px 100px;
    color: white;
`;

const Content = styled.div`
    display: flex;
    gap: 450px;
`;

const Contact = styled.div`
    display: flex;
`;

const Links = styled.div`
    display: flex;
    gap: 200px;
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
                </Contact>
            </Content>
        </Wrapper>
    );
};