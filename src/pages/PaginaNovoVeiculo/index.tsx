import React from 'react';

import TitlePages from 'src/components/TitlePages';
import { Car } from 'src/styles/icons';

import Button from 'src/components/Form/Button';
import {
  Container,
  ContainerTitle,
  ContainerBody,
  Body,
  ContainerButton,
  SelectSetor,
  SelectUnidade,
  DivCampos,
  InputViatura,
} from './styles';

const PaginaNovoVeiculo: React.FC = () => {
  const valores = [
    { value: 1, label: 'Ocioso' },
    { value: 2, label: 'Em Uso' },
    { value: 3, label: 'Em Manutenção' },
  ];
  function handleSubmit(data: any): void {
    console.log(data);
  }

  return (
    <Container>
      <ContainerTitle>
        <TitlePages title="Veículos" icon={Car} />
      </ContainerTitle>
      <ContainerBody>
        <h1>Novo Veículo</h1>
        <Body onSubmit={handleSubmit}>
          <DivCampos>
            <SelectSetor
              title="Setor de Uso"
              placeholder="Administrativo"
              name="Setor"
              options={valores}
            />
            <SelectUnidade
              title="Unidade do CBMSE"
              placeholder="Unidade"
              name="Unidade"
            />
          </DivCampos>
          <DivCampos>
            <InputViatura
              name="Veiculo"
              placeholder="ABT-001"
              label="Nomeclatura da Viatura"
            />
            <InputViatura
              name="Tipo"
              placeholder="Truck"
              label="Tipo de Veículo"
            />
            <InputViatura name="Marca" placeholder="Volksvagem" label="Marca" />
          </DivCampos>
          <DivCampos>
            <InputViatura name="Ano" placeholder="2017/2020" label="Ano" />
            <InputViatura
              name="LeituraOdometro"
              placeholder="450045"
              label="Leitura do Odômetro"
            />
            <InputViatura name="Placa" placeholder="ABC0012" label="Placa" />
          </DivCampos>
          <DivCampos>
            <InputViatura
              name="Renavam"
              placeholder="123.456.789"
              label="Renavam"
            />
            <InputViatura
              name="NumeroChassi"
              placeholder="123.456.789"
              label="Número do Chassi"
            />
            <InputViatura type="date" name="Ipva" label="Vencimento IPVA" />
          </DivCampos>
          <DivCampos>
            <InputViatura
              name="ValorVeiculo"
              placeholder="40.000"
              label="Valor do Veículo"
            />
            <InputViatura
              name="VolumeTanque"
              placeholder="230"
              label="Volume do Tanque(Litros)"
            />
            <SelectSetor
              title="Status do Veículo"
              placeholder="Em Uso"
              name="Status"
              options={valores}
            />
          </DivCampos>
          <ContainerButton>
            <Button type="submit">Cadastrar</Button>
            <Button>Voltar</Button>
          </ContainerButton>
        </Body>
      </ContainerBody>
    </Container>
  );
};

export default PaginaNovoVeiculo;
