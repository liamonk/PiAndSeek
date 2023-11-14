import React from "react";
import styled from "styled-components";

const StyledHeaderMain = styled.div`
  background-color: #b0e1ff;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: 5px 5px lightgrey;
`;

export default function header() {
  return (
    <StyledHeaderMain>
      <h1>Pi and Seek</h1>
    </StyledHeaderMain>
  );
}
