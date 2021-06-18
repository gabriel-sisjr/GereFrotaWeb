import styled from 'styled-components';
import { Form } from '@unform/web';

import Input from 'src/components/Form/Input';
import TextArea from 'src/components/Form/TextArea';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100%;
  width: 100%;
  margin-left: 230px;

  @media (max-width: 920px) {
    margin-left: min(80px, max(175px, 41vw));
    width: 80%;
  }
`;
export const ContainerTitle = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 80px;
  @media (max-width: 920px) {
    width: 110%;
    height: 74px;
    margin-top: 0px;
  }
`;
export const ContainerBody = styled.div`
  width: 90%;
  height: 100%;

  > h1 {
    color: var(--primary);
    margin-left: 20px;
    padding: 10px 10px;
  }
  @media (max-width: 920px) {
    width: 95%;
    h1 {
      font-size: 24px;
    }
  }
`;
export const Body = styled(Form)`
  width: 100%;
  height: 90%;
  border: 1px solid var(--primary);
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 920px) {
    height: 100%;
  }
`;
export const InputHora = styled(Input)`
  width: 250px;
  height: 50px;
`;
export const InputOdometro = styled(Input)`
  width: 250px;
  height: 50px;
`;
export const InputDescricao = styled(TextArea)`
  width: 100%;
  height: 150px;
`;
export const DivCampos = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
  @media (max-width: 920px) {
    flex-direction: column;
  }
`;
export const DivSaida = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

export const ContainerButton = styled.div`
  width: 95%;
  height: 100px;
  display: flex;
  margin-top: 50px;
  justify-content: space-between;

  @media (max-width: 920px) {
    width: 95%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
export const InputData = styled(Input)`
  width: 250px;
  height: 50px;
`;
export const DivText = styled.div`
  width: 95%;
  @media (max-width: 920px) {
    width: 90%;
  }
`;
