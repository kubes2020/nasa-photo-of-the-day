import React from "react";
import styled, { keyframes } from "styled-components";
const kf = keyframes`
  50%{
    opacity: .9;
  }
  80%{
    opacity: .7;
  }
  100%{
    transform: scale(1);
    opacity: 1;
  }
`;

const StyledProfileCardBox = styled.div`
  width: 80%;
  height: 60%;
  margin: auto;
  img {
    width: 100%;
    height: auto;
    opacity: 0.2;
    animation: ${kf} 2s forwards;
    box-shadow: 4px 4px 4px grey;
  }

  h1 {
    font-size: 4rem;
    transform: scale(0.1);
    animation: ${kf} 1.5s forwards;
    &:hover {
      color: #888;
    }
  }
`;

export default function ProfileCard(props) {
  const { nasaInfo } = props;
  return (
    <StyledProfileCardBox>
      <h1>{nasaInfo.title}</h1>
      <img src={nasaInfo.url} alt={nasaInfo.title} />
    </StyledProfileCardBox>
  );
}
