import styled from 'styled-components';

export const MainContainer = styled.main`
  padding: 20px;
`;

export const SectionContainer = styled.section`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h1`
  margin: 0 0 10px;
  font-size: 38px;
  font-weight: bold;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #faf4c7;
  padding: 15px;
  height: 100px;
  font-size: 18px;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;
