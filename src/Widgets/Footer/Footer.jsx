import React from "react";
import styled from "styled-components";

const FixedFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Shape = styled.div`
  width: 140px;
  height: 0;
  border-bottom: 30px solid black;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  cursor: pointer;
`;

export default function Footer() {
  return (
    <FixedFooter>
      <Shape />
    </FixedFooter>
  );
}
