import React from "react";
import styled from "styled-components";

const CPSection = styled.div`
    max-width: 1200px;
    margin: auto;
    align-items: center;
    justify-content: center;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    grid-column-gap: 100px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
    `

const Content = styled.div`
    padding: 10px;
    margin: auto;
    `

const Heading = styled.div`
    padding: 20px;
    font-family: Google Sans;
    font-weight: bold;
    font-size: 64px;
    line-height: 81px;
    @media (max-width: 768px) {
        text-align: center;
        font-size: 40px;
        line-height: 60px;
    }
    `

const Image = styled.img`
    border-radius: 10%;
    padding: 20px;
    margin: auto;
    width: 600px;
    height: 600px;
    @media (max-width: 1050px) {
        width: 300px;
        height: 300px;
        grid-row: 1 / 2;
    }
    `

const Text = styled.div`
    font-family: Google Sans;
    font-size: 34px;
    line-height: 31px;
    padding: 20px;
    padding-bottom: 50px;
    @media (max-width: 768px) {
        text-align: center;
        font-size: 24px;
        line-height: 24px;
    }
    `

const JoinButton = styled.a`
    margin: 20px;
    color: white;
    background-color: #4285F4;
    border-radius: 5px;
    padding: 10px;
    `

export const CP = () => {
    return (
        <>
            <CPSection>
                <Content>
                    <Heading>CP challenges</Heading>
                    <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam nihil dolorem reiciendis vero quidem magni ducimus, optio rerum, dignissimos placeat numquam atque obcaecati ea vitae accusamus est. Veniam, optio quisquam.</Text>
                    <JoinButton href="/">Join Now</JoinButton>
                </Content>
                <Image src="1.png" />
            </CPSection>
        </>
    )
}