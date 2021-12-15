import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width:100%
  padding: 50px  200px;
  display:flex;
  flex-direction:column;
  @media(width:970px){
    
  }
`;


const Center = styled.div`
  display:grid;
  background-color: #b7b7b7;
  place-items:center;
`;
const RadioBox = styled.div`
  display:flex;
  gap:20px;
  @media(max-width:560px){
    padding:5px 0;
    width:350px;
    flex-direction:column;
  }

`;
const Title = styled.div`
  font-size: 64px;

`;
const FormBox = styled.div`
  display:flex;
  margin-top:15px;
  flex-direction:row;
  @media(max-width:970px){
    flex-direction:column;

  }
`;
const Left = styled.div`
margin-right:40px`;
const MessageBox = styled.div``;
const Label = styled.div`
  font-size:24px;
`;
const Bottom = styled.div`
  display:flex;
  width:100%;
  justify-content:space-between;
  margin-top:10px;
  flex-direction:row;
  @media(max-width:560px){
    flex-direction:column;
  }
  
`;

const TextInput = styled.input`
border: none;
  background-color:#C4C4C4;
  border-radius: 5px;
  height:45px;
  width:400px;
  margin:10px 0; 
  @media(max-width:560px){
    width:300px;
  }
`;
const MessageInput = styled.input`
  border: none;
  background-color:#C4C4C4;
  border-radius: 5px;
  height:200px;
  width:500px;
  margin-top: 10px;
  @media(max-width:560px){
    width:300px;
  }
`;
const RadioInput = styled.input`
  border: none;
  background-color:#C4C4C4;
  
  
`;

const SendButton = styled.button`
color: white;
border:none;
background-color: #4285F4;
border-radius: 5px;
padding: 10px 20px;
font-size:20px;
@media(max-width:560px){
  width:300px;
}
`

export const Contact = () => {
  return (
    <Center>
    <Wrapper>
      
      <Title>Reach Us</Title>
      <form>
        <FormBox>
          <Left>
            <Label>Name</Label>
            <TextInput type="text" />
            <Label>Email</Label>
            <TextInput type="email" />
          </Left>
          <MessageBox>
            <Label>Message</Label>
            <MessageInput type="text" />
          </MessageBox>
        </FormBox>
      </form>
      <Label>Who are you ?</Label>
      <Bottom>
        <RadioBox>
          <Label><RadioInput type="radio" />Student </Label>
          <Label><RadioInput type="radio" />Event Organizer </Label>
          <Label><RadioInput type="radio" />Sponser </Label>
        </RadioBox>
        <SendButton type="submit">Send</SendButton>
      </Bottom>
    </Wrapper>
    </Center>
  );
};
