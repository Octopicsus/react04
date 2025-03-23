import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import styled from "styled-components";

const ListContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

const LoadMoreButton = styled.button`
  background-color: rgba(255, 255, 255, 0);
  color: transparent;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 70px;
  position: relative;
  animation: pulse 1.5s infinite;
  border: none;
  transition: 0.3s;

  &::before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    background-image: url("/img/right-arrow-next.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg) scale(1);
    opacity: 50%;
  }
  &:hover {
    transform: scale(1.5);
    animation: none;

    &:hover {
      opacity: 100%;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 0.2;
    }

    50% {
      opacity: 0.7;
    }

    100% {
      opacity: 0.2;
    }
  }
`;

export default function List({ selectedCategory, onItemSelect }) {
  const [itemUrl, setItemUrl] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!selectedCategory) {
          return;
        }

        const url = `https://swapi.dev/api/${selectedCategory}`;
        const response = await fetch(url);
        const responseData = await response.json();
        setResults(responseData.results);
        setItemUrl(responseData.next);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [selectedCategory]);

  const loadMore = async () => {
    try {
      const response = await fetch(itemUrl);
      const newData = await response.json();
      setResults([...results, ...newData.results]);
      setItemUrl(newData.next);
    } catch (error) {
      console.error("Error loading more items:", error);
    }
  };

  return (
    <ListContainer>
      {results.length > 0 ? (
        <>
          {results.map((item, index) => (
            <ListItem
              key={index}
              title={item.name}
              onClick={() => onItemSelect(item, selectedCategory)}
            />
          ))}

          {itemUrl && <LoadMoreButton onClick={loadMore}></LoadMoreButton>}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </ListContainer>
  );
}
