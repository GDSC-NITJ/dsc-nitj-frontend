import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 40px;
    background-image: url("HeaderBG.png");
    background-repeat: repeat;
    @media (max-width: 1050px) {
        gap: 5px;
    }
    `

const Wrapper = styled.div`
    background-color: white;
    `

const Header = styled.div`
    padding: 60px;
    max-width: 650px;
    margin: auto;
    @media (max-width: 768px) {
        padding: 25px;
    }
    `

const NameImage = styled.img`
    @media (max-width: 768px) {
        width: 90%;
    }
    `

const Heading = styled.div`
    font-family: Google Sans;
    font-weight: 500;
    font-size: 48px;
    line-height: 61px;
    @media (max-width: 768px) {
        font-size: 18px;
        line-height: 20px;
    }
    `

const SubHeading = styled.div`
    font-family: Raleway;
    font-weight: bold;
    font-size: 50px;
    line-height: 59px;
    padding-top: 40px;
    padding-bottom: 40px;
    @media (max-width: 768px) {
        font-size: 20px;
        line-height: 18px;
    }
    `

const Image = styled.img`
    @media (max-width: 900px) {
        width: 70%;
        padding: 20px;
    }
    @media (max-width: 768px) {
        width: 40%;
        padding: 15px;
    }
    padding: 54px;
    `

const Button = styled.a`
    background-color: #4285F4;
    padding: 10px 30px;
    color: white;
    font-family: Google Sans;
    font-size: 20px;
    line-height: 25px;
    border-radius: 5px;
    `

const Line = styled.hr`
    margin: 0;
    border: 0;
    height: 8px;
    background: linear-gradient(to right, red, blue, green, yellow);
    `

export const Hero = () => {
    return (
        <>
            <HeroContainer>
                <Header>
                    <Wrapper>
                        <NameImage src="heading.png" />
                        <Heading>Build good things, together</Heading>
                    </Wrapper>
                    <SubHeading>Explanation of the main goal of the community in 10-15 words</SubHeading>
                    <Button href="/">Explore</Button>
                </Header>
                <Image src="header.png"></Image>
            </HeroContainer>
            <Line />

        </>
    )
}