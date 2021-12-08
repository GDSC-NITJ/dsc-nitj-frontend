import React from "react";
import styled from "styled-components";

const MissionSection = styled.div`
    padding: 50px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1100px;
    `

const Heading = styled.div`
    font-family: Google Sans;
    font-weight: bold;
    font-size: 60px;
    line-height: 76px;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 30px;
        line-height: 28px;
    }
    `

const Content = styled.div`
    font-family: Google Sans;
    font-size: 32px;
    line-height: 41px;
    text-align: center;
    padding-top: 50px;
    @media (max-width: 768px) {
        font-size: 20px;
        line-height: 20px;
    }
    `

export const Mission = () => {
    return (
        <>
            <MissionSection>
                <Heading>Mission Statement</Heading>
                <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at gravida viverra vestibulum at imperdiet nulla. Magna faucibus viverra at pulvinar eleifend sem tristique. Sapien, ut non lobortis urna, et nibh adipiscing neque sit. Luctus urna, gravida egestas nunc. Ut sagittis, volutpat . </Content>
            </MissionSection>
        </>
    )
}