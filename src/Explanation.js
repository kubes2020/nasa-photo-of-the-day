import React from "react";
import "./App.css";
import styled, { keyframes } from "styled-components";

const StyledExplanation = styled.p`
  width: 80%;
  margin: auto;
  font-size: 1.6rem;
  padding-top: 3%;
  line-height: 1.5;
  text-align: justify;
  text-shadow: 1px 1px 2px #8bbbd2;
`;

export default function Explanation({ description }) {
  return <StyledExplanation>{description}</StyledExplanation>;
}
