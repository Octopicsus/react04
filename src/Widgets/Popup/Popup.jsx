import React from "react";
import styled from "styled-components";
import { template } from "../../Data/DataTemplate";

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.87);
  top: 50%;
  left: 50%;
  z-index: 5;
  backdrop-filter: invert(1);
  transform: ${(props) =>
    props.isVisible ? "translate(-50%, -50%) scale(1)" : "scale(0)"};
`;

const Blur = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  top: 50%;
  left: 50%;
  z-index: 5;
  backdrop-filter: blur(5px);
  transform: ${(props) =>
    props.isVisible ? "translate(-50%, -50%) scale(1)" : "scale(0)"};
`;

const PopupContainer = styled.div`
  position: fixed;
  width: 360px;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: ${(props) =>
    props.isVisible ? "translate(-50%, -50%) scale(1)" : "scale(0)"};
  background-color: rgb(255, 255, 255);
  clip-path: polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%);
  padding-left: 50px;
  padding-right: 60px;
  padding-top: 50px;
  padding-bottom: 30px;
  margin: 10px;
`;

const Title = styled.h2`
  margin: 0;
  font-family: "Orbitron-B";
  font-size: 34px;
  margin-bottom: 30px;
`;

const DescriptItem = styled.div`
  display: flex;
  margin-bottom: 14px;
`;

const Label = styled.h5`
  margin: 0;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 10px;
  font-size: 15px;
  width: 100%;
  color: rgb(112, 112, 112);
`;

const Value = styled.h4`
  margin: 0;
  font-size: 20px;
  text-align: right;
`;

export default function Popup({ selectedItem, selectedCategory, onClose }) {
  if (!selectedItem) return null;

  return (
    <>
      <Overlay isVisible={!!selectedItem} />
      <Blur isVisible={!!selectedItem} onClick={onClose} />
      <PopupContainer isVisible={!!selectedItem} onClick={onClose}>
        <Title>{selectedItem.name}</Title>

        {template[selectedCategory].map((item, index) => (
          <DescriptItem key={index}>
            <Label>{item.label}:</Label>
            <Value>{selectedItem[item.key]}</Value>
          </DescriptItem>
        ))}
      </PopupContainer>
    </>
  );
}
