import React from 'react';
import { Container } from './Header.styles';

export const Header = ({ children }: { children?: JSX.Element }) => {
  return (
    <Container>
      <h1>Ghibli Films</h1>
      {children}
    </Container>
  );
};
