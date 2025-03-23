import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import styled from "styled-components";

const ListContainer = styled.div`
margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function List({ selectedCategory, onItemSelect }) {
  const [itemUrl, setItemUrl] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://swapi.dev/api/${selectedCategory}`;
        const response = await fetch(url);
        const responseData = await response.json();
        setData(responseData);
        setItemUrl(responseData.next);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [selectedCategory]);

  return (
    <ListContainer>
      {data && data.results ? (
        data.results.map((item, index) => (
          <ListItem 
            key={index} 
            title={item.name || item.title} 
            onClick={() => onItemSelect(item, selectedCategory)}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </ListContainer>
  );
}