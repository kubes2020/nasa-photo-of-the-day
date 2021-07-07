import React from "react";
import styled from "styled-components";

const StyledExplanation = styled.p`
  width: 80%;
  margin: auto;
  font-size: 1.6rem;
  padding-top: 3%;
  line-height: 1.5;
  text-align: justify;
  /* brought in color from the global ThemeProvider in index.js, then values via folder 'theme' */
  text-shadow: 1px 1px 2px ${(props) => props.theme.primaryColor};
`;

export default function Explanation({ description }) {
  return <StyledExplanation>{description}</StyledExplanation>;
}
