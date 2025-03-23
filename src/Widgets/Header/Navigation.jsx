import React from "react";
import styled from "styled-components";

import { template } from "../../Data/DataTemplate";
import NavButton from "./NavButton";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.089);
  position: sticky;
  top: 0;
  background-color: white;
`;

export default function Navigation({ selected, setSelected }) {
  const categories = Object.keys(template);
  
  const handleCategorySelect = (category) => {
    setSelected(category);
  };

  return (
    <Nav>
      {categories.map((category) => (
        <NavButton
          key={category}
          text={category.toUpperCase()}
          isSelected={category === selected}
          onClick={() => handleCategorySelect(category)}
        />
      ))}
    </Nav>
  );
}
