import React from "react";
import "./App.css";
import styled, { keyframes } from "styled-components";
import Title from "./Title";

const StyledProfileCardBox = styled.div`
  width: 80%;
  height: 60%;
  margin: auto;
  img {
    width: 100%;
    height: auto;
  }
  h2 {
    font-size: 3rem;
  }
`;

export default function ProfileCard(props) {
  const { nasaInfo } = props;
  console.log("props", nasaInfo);
  return (
    <StyledProfileCardBox>
      <h2>{nasaInfo.title}</h2>
      <img src={nasaInfo.url} alt={nasaInfo.title} />
    </StyledProfileCardBox>
  );
}
