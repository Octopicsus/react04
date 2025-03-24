import React from "react";
import styled from "styled-components";

const Title = styled.p`
  font-size: 15px;
  margin: 17px;
  height: 20px;
  transition: 0.3s;
  cursor: pointer;
  color: rgb(151, 151, 151);

  &:hover {
    font-size: 18px;
    color: black;
    font-family: "Orbitron-B";
  }
`;

export default function ListItem({ title, onClick }) {
  return <Title className="list-item" onClick={onClick}>{title}</Title>;
}
