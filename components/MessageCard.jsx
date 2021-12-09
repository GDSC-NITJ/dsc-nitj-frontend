import React from "react";
import styled from "styled-components";

const MessageCardWrapper = styled.div`
    background-color: #EAEAEA;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    @media (max-width: 1050px) {
        flex-direction: column;
        align-items: center;
    }
    `

const Left = styled.div`
    padding-right: 40px;
    @media (max-width: 768px) {
        padding-bottom: 20px;
        padding-right: 0px;
    }
    `

const Name = styled.div`
    font-family: Poppins;
    font-weight: 600;
    font-size: 28px;
    line-height: 42px;
    text-align: center;
    `

const Position = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
`

const Image = styled.img`
    width: 170px;
    height: 170px;
    border-radius: 100%;
    margin-top: -90px;
    margin-bottom: 20px;
    `

const Info = styled.div`
    font-family: Google Sans;
    font-size: 24px;
    line-height: 31px;
    @media (max-width: 768px) {
        font-size: 18px;
        line-height: 24px;
        text-align: center;
    }
    `


export const MessageCard = () => {
    return (
        <>
            <MessageCardWrapper>
                <Left>
                    <Image src="message.png" />
                    <Name>Name Last</Name>
                    <Position>Ex-DSC lead</Position>
                    <Position>2019-20</Position>
                </Left>
                <Info>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste consequatur saepe minus tenetur, eaque ipsam? Dolore rem veniam doloribus reiciendis reprehenderit distinctio quod ad impedit nulla totam exercitationem, rerum praesentium!</Info>
            </MessageCardWrapper>
        </>
    )
}