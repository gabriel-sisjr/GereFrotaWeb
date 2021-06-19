import React from 'react';

import { Survey } from 'src/styles/icons';
import TitlePages from 'src/components/TitlePages';
import {
  Container,
  ContainerTitle,
  ContainerBody,
  ContainerHeader,
  Header,
  Body,
  InputOdometro,
} from './styles';


const PaginaRealizarVistoria: React.FC = () => {
  function handleSubmit(data: any): void {
    console.log(data);
  }
  return (
    <Container>
      <ContainerTitle>
        <TitlePages title="Realizar Vistoria" icon={Survey} />
      </ContainerTitle>
      <ContainerBody>
        <h1>ABT-001</h1>
        <Body onSubmit={handleSubmit}>
          <ContainerHeader>
            <Header >
              <div>
                <InputOdometro
                  name="Odometro" placeholder="45.600" label="Leitura do Odômetro"
                />
              </div>
              <h3>Marque Caso haja alguma alteração</h3>
            </Header>
          </ContainerHeader>
        </Body>
      </ContainerBody>
    </Container>
  );
};

export default PaginaRealizarVistoria;
