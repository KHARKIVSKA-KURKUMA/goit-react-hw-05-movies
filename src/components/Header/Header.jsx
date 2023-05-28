import { ButtonLink, HeaderContainer } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <ButtonLink to="/">Home</ButtonLink>
      <ButtonLink to="/movies">Movie</ButtonLink>
    </HeaderContainer>
  );
};

export default Header;
