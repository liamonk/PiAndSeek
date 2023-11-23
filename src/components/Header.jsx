import React from "react";
import styled from "styled-components";

const StyledHeaderMain = styled.div`
  background-color: #b0e1ff;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: 5px 5px lightgrey;
  display: flex;
`;

const StyledImage = styled.img`
  height: 70px;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
`;

export default function header() {
  return (
    <StyledHeaderMain>
      <h1>Pi and Seek</h1>
      <StyledImage src="./src/assets/logo.png" />
    </StyledHeaderMain>
  );
}
