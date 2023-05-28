import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 10px;
  background-color: #f2f2f2;
`;

export const ButtonLink = styled(NavLink)`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  &:hover,
  &:focus {
    background-color: #0056b3;
  }
  &.active {
    background-color: #0056b3;
  }
`;
