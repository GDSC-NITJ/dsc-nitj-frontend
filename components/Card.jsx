import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
    background-color: white;
    border-radius: 20px;
    `

const CardTop = styled.div`
    display: flex;
    gap: 10px;
    `

const Image = styled.img`
    border-radius: 100%;
    width: 60px;
    height: 60px;
    padding: 5px;
    margin: 15px;
    `

const Heading = styled.h2`
    font-family: Google Sans;
    font-size: 24px;
    line-height: 31px;
    margin-bottom: 5px;
    `

const Content = styled.p`
    font-size: 15px;
    padding: 5px;
    margin: 5px;
    `

export const Card = () => {
    return (
        <>
            <CardWrapper>
                <CardTop>
                    <Image src="1.png" />
                    <Heading>Hello World</Heading>
                </CardTop>
                <Content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque euismod, urna eu tincidunt consectetur,
                    nisi nisl aliquam nunc, eget egestas nisl nisi eu
                    urna.
                </Content>
            </CardWrapper>
        </>
    )
}