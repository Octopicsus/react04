import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 10px 30px;
  border: none;
  cursor: pointer;
  background-color: white;
  font-weight: bold;
  letter-spacing: 1px;
  transition: 0.3s;

  &.selected {
    background-color: rgb(0, 0, 0);
    color: white;
  }
`;

export default function NavButton({ text, isSelected, onClick }) {
  return (
    <Button className={isSelected ? "selected" : ""} onClick={onClick}>
      {text}
    </Button>
  );
}
