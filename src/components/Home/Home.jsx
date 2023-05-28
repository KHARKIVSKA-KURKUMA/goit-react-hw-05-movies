import { getPopular } from 'API/fetchMovie';
import {
  Heading,
  List,
  ListItem,
  MainContainer,
  SectionContainer,
} from './Home.styled';
import { useEffect, useState } from 'react';

const Home = () => {
  /* ---------------------------------- STATE --------------------------------- */
  const [popularMoviesArr, setPopularMoviesArr] = useState([]);
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    getPopular().then(({ results }) => setPopularMoviesArr(results));
  });
  /* --------------------------------- RENDER --------------------------------- */
  return (
    <MainContainer>
      <SectionContainer>
        <Heading>Trending Today</Heading>
        <List>
          {popularMoviesArr.map(({ original_title, original_name, id }) => (
            <ListItem key={id}>{original_title ?? original_name}</ListItem>
          ))}
        </List>
      </SectionContainer>
    </MainContainer>
  );
};

export default Home;
