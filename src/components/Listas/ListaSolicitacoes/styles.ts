/* eslint-disable no-nested-ternary */
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface PropsContainer {
  status: number;
}
export const Container = styled.div<PropsContainer>`
  width: 95%;
  height: 90px;
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  border: 4px solid var(--alert);
  border-radius: 8px;

  ${(props) =>
    props.status === 1
      ? css`
          border: 4px solid var(--alert);
        `
      : props.status === 2
      ? css`
          border: 4px solid var(--atencao);
        `
      : props.status === 3
      ? css`
          border: 4px solid var(--confirm);
        `
      : css`
          border: 4px solid var(--primary);
        `}

  transition: transform 0.2s;
  &:hover {
    transform: translateX(10px);
    div {
      border-right: 2px solid var(--primary);
    }
    div:last-child {
      border-right: 0;
    }
    & svg,
    strong {
      color: var(--hover);
    }
  }
  @media (max-width: 360px) {
    align-items: center;
    div:nth-child(1) {
      display: none;
    }
    div:nth-child(2) {
      width: 60%;
      align-items: center;
      justify-content: center;
      margin-right: 0px;
    }
    div:nth-child(3) {
      flex: 1;
      align-items: center;
    }
  }
`;

export const ContainerItems = styled(Link)`
  display: flex;
  flex: 1;
  align-items: center;
  text-decoration: none;
`;
export const ContainerNumero = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 2px solid var(--primary);
  svg {
    width: 40px;
    height: 40px;
    margin-left: 8px;
    margin-right: 32px;
    path {
      fill: var(--primary);
    }
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      color: var(--primary);
    }
  }
  @media (max-width: 720px) {
    height: 80%;
    div {
      span {
        font-size: 16px;
        text-align: center;
        margin-right: 1%;
      }
    }
    svg {
      display: none;
    }
  }
`;
export const ContainerRemetente = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 2px solid var(--primary);
  padding-right: 24px;
  span {
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    color: var(--primary);
  }
  @media (max-width: 720px) {
    align-items: center;
    span {
      font-size: 14px;
      text-align: center;
    }
  }
`;

export const ContainerAcoes = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  svg {
    width: 24px;
    height: 24px;
    fill: var(--primary);
  }
  span {
    font-size: 18px;
    color: var(--primary);
    font-weight: 500;
    display: inline;
  }
  @media (max-width: 720px) {
    span {
      display: none;
    }
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
