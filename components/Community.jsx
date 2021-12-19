import React from "react";
import styled from "styled-components";

const CommunitySection = styled.div`
    padding: 40px;
    max-width: 800px;
    align-items: center;
    margin: auto;
    font-family: 'Roboto', sans-serif;
    `

const Heading = styled.div`
    font-family: Google Sans;
    font-weight: bold;
    font-size: 64px;
    line-height: 81px;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 48px;
        line-height: 60px;
    }
    font-family: 'Roboto', sans-serif;
    `

const SubHeading = styled.div`
    font-family: Google Sans;
    font-weight: normal;
    font-size: 32px;
    line-height: 41px;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 24px;
        line-height: 32px;
    }
    font-family: 'Roboto', sans-serif;
    `

const Buttons = styled.div`
    padding: 40px;
    display: flex;
    gap: 50px;
    justify-content: center;
    align-items: center;
    max-width: 600px;
    margin: auto;
    flex-direction: row;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    font-family: 'Roboto', sans-serif;
    `

const Button = styled.a`
    background-color: ${props => props.bgColor};
    border-radius: 8px;
    display: flex;
    gap: 10px;
    padding: 10px;
    width: 220px;
    align-items: center;
    justify-content: space-around;
    font-family: 'Roboto', sans-serif;
    `

const Image = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
    font-family: 'Roboto', sans-serif;
    `

const Text = styled.div`
    font-family: Google Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
    color: white;
    font-family: 'Roboto', sans-serif;
    `

const Line = styled.div`
    border-left: 3px solid rgba(0, 0, 0, 0.8);
    height: 100px;
    @media (max-width: 768px) {
        display: none;
    }
    font-family: 'Roboto', sans-serif;
    `

export const Community = () => {
    return (
        <>
            <CommunitySection>
                <Heading>Checkout our Community</Heading>
                <SubHeading>Connect, Discuss, Explore & Invent</SubHeading>
                <SubHeading>Happy Hacking !</SubHeading>
                <Buttons>
                    <Button bgColor="#7289DA" href="/">
                        <Image width="40px" height="40px" src="discord.png" />
                        <Text>Join Discord</Text>
                    </Button>
                    <Line />
                    <Button bgColor="#000000" href="/">
                        <Image width="40px" height="40px" src="github.png" />
                        <Text>Add a Star</Text>
                    </Button>
                </Buttons>
            </CommunitySection>
        </>
    )
}