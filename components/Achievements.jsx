import React from "react";
import styled from "styled-components";

const AchievementsSection = styled.div`
    font-family: 'Roboto', sans-serif;
    padding: 30px;
    `

const TopSection = styled.div`
    max-width: 900px;
    margin: auto;
    font-family: 'Roboto', sans-serif;
    `

const Heading = styled.div`
    font-family: Roboto;
    font-weight: bold;
    font-size: 60px;
    line-height: 70px;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 40px;
        line-height: 50px;
    }
    font-family: 'Roboto', sans-serif;
    `

const Text = styled.div`
    padding: 20px;
    font-family: Roboto;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 18px;
        line-height: 20px;
    }
    font-family: 'Roboto', sans-serif;
    `

const NumbersSection = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    align-items: center;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-row-gap: 40px;
    }
    font-family: 'Roboto', sans-serif;
    `

const Number = styled.div`
    font-family: Roboto;
    font-weight: 900;
    font-size: 96px;
    line-height: 112px;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 72px;
        line-height: 80px;
    }
    font-family: 'Roboto', sans-serif;
    `

const NumberText = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 24px;
        line-height: 32px;
    }
    font-family: 'Roboto', sans-serif;
    `

export const Achievements = () => {
    return (
        <>
            <AchievementsSection>
                <TopSection>
                    <Heading>Achievements</Heading>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, et adipiscing enim consectetur in interdum massa.</Text>
                </TopSection>
                <NumbersSection>
                    <Number>45 <NumberText>Developers</NumberText></Number>
                    <Number>20+ <NumberText>Events every year</NumberText></Number>
                    <Number>2k+ <NumberText>Active members</NumberText></Number>
                </NumbersSection>
            </AchievementsSection>

        </>
    )
}