import React from "react";
import styled from "styled-components";
import { SponsorCard } from "./SponsorCard";


const SVGImage = styled.img`
    height:300px;
    width:70vw; 
    max-width:1100px;
    mix-width:400px;
`

const Wrapper = styled.div`
    font-family: 'Roboto', sans-serif;
    display:flex;
    flex-direction:column;
    align-items:center;
`
const CardGridWrapper = styled.div`
    display:flex;
    width:60vw;
    flex-wrap:wrap;
    gap:60px;
    margin:40px;
    justify-content:center
`
const Title = styled.div`
    font-size:60px;
    
`

const SubTitle = styled.div`
    font-size:28px;
    text-align:center;
    max-width:800px;
`

export const Sponsor = () => {
    return (
        <>
            <Wrapper>
                <SVGImage src="sponsor_back.svg" />
                <Title>Partners</Title>
                <SubTitle>lorem ipsum, dolor sit amet consectetur adipisicing elit</SubTitle>

                <CardGridWrapper>
                    <SponsorCard />
                    <SponsorCard />
                    <SponsorCard />
                    <SponsorCard />
                    <SponsorCard />
                    <SponsorCard />
                    <SponsorCard />
                    <SponsorCard />
                </CardGridWrapper>

            </Wrapper>



        </>
    )
}