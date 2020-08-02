import React from 'react';

import logo from '../../assets/images/pokemon-tcg-logo.png';
import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <img src={logo} alt="Pokémon TGC logo" />
  </Container>
);

export default Header;
