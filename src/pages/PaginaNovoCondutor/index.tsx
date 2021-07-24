import React from 'react';
import { useHistory } from 'react-router-dom';

import { Card } from 'src/styles/icons';
import TitlePages from 'src/components/TitlePages';
import Button from 'src/components/Form/Button';
import {
  Container,
  ContainerTitle,
  ContainerBody,
  Body,
  DivInput,
  InputMatricula,
  InputNome,
  DivDados,
  InputCpf,
  SelectUnidade,
  DivCnh,
  InputCnh,
  InputVencimento,
  InputCategoria,
  InputFone,
  ContainerButton,
} from './styles';

const PaginaNovoCondutor: React.FC = () => {
  const history = useHistory();

  function handleSubmit(data: any): void {
    console.log(data);
  }

  function handleClick() {
    history.push('/condutores');
  }
  return (
    <Container>
      <ContainerTitle>
        <TitlePages title="Condutores" icon={Card} />
      </ContainerTitle>
      <ContainerBody>
        <h1>Novo Condutor</h1>
        <Body onSubmit={handleSubmit}>
          <DivInput>
            <InputNome
              name="nomeCompleto"
              placeholder="Nome Completo do Condutor"
              label="Nome Completo"
            />
            <InputMatricula
              name="Matricula"
              placeholder="201500431222"
              label="Número de Matrícula"
            />
          </DivInput>
          <DivDados>
            <InputCpf
              name="CpfCondutor"
              placeholder="000.000.000-00"
              label="CPF"
            />
            <SelectUnidade
              title="Unidade do CBMSE"
              placeholder="Unidade"
              name="Unidade"
            />
            <InputFone
              name="NumeroTelefone"
              placeholder="79 99999-9999"
              label="Telefone"
            />
          </DivDados>
          <DivCnh>
            <InputCnh
              name="NumeroCnh"
              placeholder="212123233232"
              label="Número da CNH"
            />
            <InputVencimento
              name="VencimentoCnh"
              type="date"
              label="Vencimento da CNH"
            />
            <InputCategoria
              name="Categoria"
              placeholder="AB"
              label="Categoria"
            />
          </DivCnh>
          <ContainerButton>
            <Button type="submit">Cadastrar</Button>
            <Button onClick={handleClick}>Voltar</Button>
          </ContainerButton>
        </Body>
      </ContainerBody>
    </Container>
  );
};

export default PaginaNovoCondutor;
