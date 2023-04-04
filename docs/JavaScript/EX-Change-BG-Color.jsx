import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 250px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ color }) => color};

  input {
    background: none;
    border: none;
  }
`;


export default function ChangeBGColor() {
  const [value, setValue] = useState("#ffffff");

  return (
    <Wrapper color={value}>
      <input
        type="color"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </Wrapper>
  );
}
