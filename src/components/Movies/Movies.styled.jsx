import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const SearchInput = styled.input`
  padding: 12px;
  max-width: 400px;
  font-size: 16px;
  border: none;
  border-radius: 30px;
  background-color: #f2f2f2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  outline: none;
  flex-grow: 1;

  &::placeholder {
    color: #aaa;
  }
`;

export const SearchButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #0dbf40;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-left: 8px;
  border-radius: 30px;
  &:hover {
    background-color: #008409;
  }
`;

export const MovieList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
`;

export const MovieItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  max-width: 300px;
  border-radius: 5px;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;

export const MovieTitle = styled.span`
  font-size: 18px;
  color: #000000;
  padding: 15px 10px;
`;

export const MovieImage = styled.img`
  width: 300px;
  height: 380px;
`;
