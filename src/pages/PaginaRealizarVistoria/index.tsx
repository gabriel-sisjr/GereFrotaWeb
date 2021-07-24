import React from 'react';
import { useHistory } from 'react-router-dom';

import { Survey } from 'src/styles/icons';
import TitlePages from 'src/components/TitlePages';
import CheckBox from 'src/components/Form/CheckBox';
import Button from 'src/components/Form/Button';
import { CamposVistoria, CamposForm } from './dataForm';
import {
  Container,
  ContainerTitle,
  ContainerBody,
  ContainerHeader,
  Header,
  Body,
  InputOdometro,
  ContainerButton,
  ContainerTable,
  ContainerForm,
  DivText,
  InputDescricao,
} from './styles';

const PaginaRealizarVistoria: React.FC = () => {
  const history = useHistory();

  function handleSubmit(data: any): void {
    console.log(data);
  }
  function handleClick() {
    history.push('/menuVeiculo');
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
            <Header>
              <div>
                <InputOdometro
                  name="Odometro"
                  placeholder="45.600"
                  label="Leitura do Odômetro"
                />
              </div>
              <h3>Marque Caso haja alguma alteração</h3>
            </Header>
          </ContainerHeader>
          <ContainerTable>
            <tr>
              <th />
              <th>Lado Direito</th>
              <th>Lado Esquerdo</th>
            </tr>
            {CamposVistoria.map((label) => (
              <tr>
                <th>{label}</th>
                <th>
                  <CheckBox name={`${label.replace(/\s/g, '_')}_direito`} />
                </th>
                <th>
                  <CheckBox name={`${label.replace(/\s/g, '_')}_esquerdo`} />
                </th>
              </tr>
            ))}
          </ContainerTable>
          <ContainerForm>
            {CamposForm.map((label) => (
              <div>
                <CheckBox name={`${label.replace(/\s/g, '_')}`} />
                <span> {label} </span>
              </div>
            ))}
          </ContainerForm>
          <DivText>
            <InputDescricao name="Descricao" label="Descricao" />
          </DivText>
          <ContainerButton>
            <Button type="submit">Cadastrar</Button>
            <Button onClick={handleClick}>Voltar</Button>
          </ContainerButton>
        </Body>
      </ContainerBody>
    </Container>
  );
};

export default PaginaRealizarVistoria;
