import React from "react";
import styled from "styled-components";

const EventsSection = styled.div`
    padding: 30px;
    @media (max-width: 768px) {
        padding: 10px;
    }
    `

const Heading = styled.div`
    font-family: Google Sans;
    font-weight: bold;
    font-size: 60px;
    line-height: 76px;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 30px;
        line-height: 40px;
    }
    `

const EventCard = styled.div`
    max-width: 1100px;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding: 30px;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    grid-column-gap: 0px;
    @media (max-width: 1150px) {
        grid-template-columns: 1fr;
        padding: 10px;
    }
    `

const Image = styled.img`
    width: 475px;
    height: 500px;
    margin: auto;
    @media (max-width: 1150px) {
        width: 450px;
        height: 400px;
    }
    @media (max-width: 550px) {
        width: 290px;
        height: 250px;
    }
    `

const Description = styled.div`
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    padding: 30px;
    margin: auto;
    padding-top: 50px;
    padding-bottom: 80px;
    position: relative;
    @media (max-width: 1150px) {
        width: 450px;
        padding: 10px;
        text-align: center;
    }
    @media (max-width: 550px) {
        width: 290px;
        padding: 10px;
        text-align: center;
    }
    `

const DescriptionHeading = styled.div`
    font-family: Google Sans;   
    font-size: 48px;
    line-height: 61px;
    padding-bottom: 20px;
    @media (max-width: 768px) {
        font-size: 30px;
        line-height: 40px;
    }
    `

const Text = styled.div`
    font-family: Google Sans;
    font-size: 24px;
    line-height: 31px;
    @media (max-width: 768px) {
        font-size: 18px;
        line-height: 24px;
    }
    `

const Timing = styled.div`
    font-family: Google Sans;
    font-weight: bold;
    font-size: 48px;
    line-height: 61px;
    padding-bottom: 40px;
    @media (max-width: 768px) {
        font-size: 30px;
        line-height: 40px;
    }
    `

const DetailsButton = styled.a`
    position: absolute;
    bottom: 0;
    right: 40px;
    color: white;
    background-color: #4285F4;
    border-radius: 5px;
    padding: 10px;
    `

const ExploreButtonWrapper = styled.div`
    padding: 30px;
    display: flex;
    align-items: center;
    `

const ExploreButton = styled.a`
    margin: auto;
    color: white;
    background-color: #4285F4;
    border-radius: 5px;
    padding: 10px;
    `

export const Events = () => {
    return (
        <>
            <EventsSection>
                <Heading>Catch Us Live</Heading>
                <EventCard>
                    <Image src="1.png" />
                    <Description>
                        <DescriptionHeading>Android Study Jams</DescriptionHeading>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien venenatis dignissim curabitur fermentum scelerisque. Iaculis neque metus, gravida vulputate enim, posuere blandit. Ultricies consectetur semper eget ut facilisi tristique vehicula scelerisque. Tortor diam adipiscing gravida.</Text>
                        <Timing>20th OCT | 5 PM IST</Timing>
                        <DetailsButton href="/">More Details</DetailsButton>
                    </Description>
                </EventCard>
                <ExploreButtonWrapper>
                    <ExploreButton href="/">Browse all Events</ExploreButton>
                </ExploreButtonWrapper>
            </EventsSection>
        </>
    )
}