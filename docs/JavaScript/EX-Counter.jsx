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
  gap: 8px;

  background: ${({ color }) => color};

  color: black;
  font-size: 20px;
`;


export default function Counter() {
  const [num, setNum] = useState(0);

  function getColor() {
    if (num > 0) return "#00ff00";
    else if (num < 0) return "#ff0000";
    else return "#0000ff";
  }

  return (
    <Wrapper color={getColor()}>
      <button onClick={() => setNum(Math.max(num - 1, -5))}>Remove</button>
      <span>{num}</span>
      <button onClick={() => setNum(Math.min(num + 1, 5))}>Add</button>
    </Wrapper>
  );
}
