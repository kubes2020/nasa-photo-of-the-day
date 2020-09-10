import React from "react";
import "./App.css";
import styled, { keyframes } from "styled-components";

export default function Footer({ nasaInfo }) {
  return (
    <p>
      copyright: {nasaInfo.copyright}, {nasaInfo.date}
    </p>
  );
}
