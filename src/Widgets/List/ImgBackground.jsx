import React from "react";
import styled from "styled-components";

const Cover = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 400px;
    background: url("/img/star-wars.svg");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;

export default function ImgBackground() {
  return <Cover/>;
}
