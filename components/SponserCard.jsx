import React from "react";
import styled from "styled-components";

const Item = styled.div`
    
    display:flex;
    align-items: center;
    
`
const Image = styled.img`
    height:70px;
    width:70px;
    border-radius:50%;
    
`
const Title = styled.div`
    font-size:20px;
    padding-left: 10px
    
`

export const SponserCard = () => {
    return <Item>
        <Image src="1.png" />
        <Title >Sponser Name</Title>
    </Item>
}
