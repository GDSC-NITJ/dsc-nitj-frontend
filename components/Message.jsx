import React from "react";
import styled from "styled-components";
import { MessageCard } from "./MessageCard";

const MessageSection = styled.div`
    background-color: #34A853;
    padding: 20px;
    `

const Heading = styled.div`
    font-family: Google Sans;
    font-weight: bold;
    font-size: 60px;
    line-height: 76px;
    text-align: center;
    padding-bottom: 100px;
    @media (max-width: 768px) {
        font-size: 40px;
        line-height: 56px;
    }
    `

const Messages = styled.div`
    padding: 20px;
    padding-bottom: 50px;
    display: grid;
    max-width: 1300px;
    margin: auto;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 110px;
    grid-column-gap: 40px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
    `

export const Message = () => {
    return (
        <>
            <MessageSection>
                <Heading>Message From Our Seniors</Heading>
                <Messages>
                    <MessageCard />
                    <MessageCard />
                </Messages>
            </MessageSection>
        </>
    )
}