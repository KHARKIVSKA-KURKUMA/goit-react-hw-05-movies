import React from 'react';
import styled from 'styled-components';

const LoadMore = ({ onClick }) => {
  return <LoadMoreButton onClick={onClick}>Load More</LoadMoreButton>;
};

const LoadMoreButton = styled.button`
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  display: block;
  margin: 15px auto 0;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #45a049;
  }
`;
export default LoadMore;
