import React from "react";
// import "./App.css";
import styled from "styled-components";

const StyledFooter = styled.footer`
  font-family: sans-serif;
  color: #888;
  padding: 4% 0 1.5% 0;
  font-size: 1.2rem;
`;

export default function Footer({ nasaInfo }) {
  return (
    <StyledFooter>
      copyright: {nasaInfo.copyright}, {nasaInfo.date}
    </StyledFooter>
  );
}
