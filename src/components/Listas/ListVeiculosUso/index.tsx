import React from 'react';

import { Car, Steering } from '../../../styles/icons';
import { Container } from './styles';

interface PropsList {
  placa?: string;
  modelo?: string;
  id?: number;
}
const ListVeiculosUso: React.FC<PropsList> = ({ modelo, placa, id }) => {
  return (
    <Container to="/menuVeiculo">
      <div>
        <Car />
        <strong>{placa}</strong>
      </div>
      <div>
        <strong>{modelo}</strong>
      </div>
      <div>
        <Steering />
        <strong>Usar Veículo</strong>
      </div>
    </Container>
  );
};

export default ListVeiculosUso;
