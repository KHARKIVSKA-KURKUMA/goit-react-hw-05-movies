import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  padding-left: 20px;
`;

export const Title = styled.h2`
  font-size: 34px;
  margin-top: 0px;
`;

export const Score = styled.p`
  margin: 0;
  font-weight: bold;
`;

export const Overview = styled.p`
  margin: 0;
  font-weight: bold;
`;

export const Genres = styled.p`
  margin: 0;
  font-weight: bold;
`;
export const Desc = styled.p`
  margin: 0;
  font-weight: 400;
  line-height: 1.4;
`;
export const LinksMenu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const LinksItem = styled.li`
  margin: 0 10px;
`;
export const PosterImg = styled.img`
  max-width: 300px;
  height: auto;
`;
export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 20px;
`;
export const StyledLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  background-color: #333;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &.active {
    background-color: #b3a100;
  }

  &:hover {
    background-color: #555;
  }
`;
