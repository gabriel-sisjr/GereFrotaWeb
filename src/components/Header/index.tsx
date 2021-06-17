import React from 'react';

import { Logout } from '../../styles/icons';
import { Container, HeaderPage } from './styles';

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <HeaderPage>
          <button type="button">
            <Logout />
            <span>Sair</span>
          </button>
        </HeaderPage>
      </Container>
    </>
  );
};

export default Header;
