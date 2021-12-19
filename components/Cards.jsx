import React from "react";
import styled from "styled-components";
import { Card } from "./Card";

const CardsSectionWrapper = styled.div`
    background-color: #FBBC0599;
    font-family: 'Roboto', sans-serif;
    `
const CardsSection = styled.div`
    padding: 50px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 50px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
    font-family: 'Roboto', sans-serif;
    `

export const Cards = () => {
    return (
        <>
            <CardsSectionWrapper>
                <CardsSection>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </CardsSection>
            </CardsSectionWrapper>
        </>
    )
}