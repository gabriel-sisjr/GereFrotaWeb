import React from 'react';
import { Register } from 'src/styles/icons';
import TitlePages from 'src/components/TitlePages';
import Button from 'src/components/Form/Button';
import {
  Container,
  ContainerTitle,
  ContainerBody,
  Body,
  DivCampos,
  InputHora,
  InputOdometro,
  InputDescricao,
  ContainerButton,
  InputData,
  DivText,
} from './styles';

const PaginaRegistrarSaída: React.FC = () => {
  function handleSubmit(data: any): void {
    console.log(data);
  }
  return (
    <Container>
      <ContainerTitle>
        <TitlePages title="Registrar Saída" icon={Register} />
      </ContainerTitle>
      <ContainerBody>
        <h1>ABT-001</h1>
        <Body onSubmit={handleSubmit}>
          <DivCampos>
            <InputData name="Data" label="Data" type="date" />
          </DivCampos>
          <DivCampos>
            <InputHora name="HoraSaida" label="Horário da saída" type="time" />
            <InputOdometro
              name="OdometroSaida"
              label="Leitura do Odômetro"
              placeholder="Inicial"
            />
          </DivCampos>
          <DivCampos>
            <InputHora
              name="HoraRetorno"
              label="Horário de Retorno"
              type="time"
            />
            <InputOdometro
              name="OdometroRetorno"
              label="Leitura do Odômetro"
              placeholder="Final"
            />
          </DivCampos>
          <DivText>
            <InputDescricao name="Descricao" label="Descricao" />
          </DivText>
          <ContainerButton>
            <Button type="submit">Cadastrar</Button>
            <Button>Voltar</Button>
          </ContainerButton>
        </Body>
      </ContainerBody>
    </Container>
  );
};

export default PaginaRegistrarSaída;
