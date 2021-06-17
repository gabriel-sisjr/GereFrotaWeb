import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { Home, Tools, Car, Card, Chart } from '../../styles/icons';

export const Container = styled.div`
  @media (max-width: 720px) {
    width: 80px;
    top: 77px;
  }

  width: 230px;
  height: 100%;
  background: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--primary);
  border-top: 0px;
  position: fixed;
  left: 0;
  padding: 9px 19px 20px;
`;
export const Profile = styled.div`
  @media (max-width: 720px) {
    left: 8px;
    margin-top: 16px;
    border-bottom: 0px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid var(--primary);
  width: 90%;
  flex-shrink: 0;
`;
export const ImgProfile = styled.div`
  @media (max-width: 720px) {
    img {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      border: 3px solid var(--secundary);
      flex-shrink: 0;
    }
    span {
      display: none;
    }
    strong {
      display: none;
    }
  }
  @media (min-width: 720px) {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    img {
      height: 70px;
      width: 70px;
      border-radius: 50%;
      border: 3px solid var(--secundary);
      flex-shrink: 0;
    }
    div {
      display: flex;
      flex-direction: column;
      margin-left: 8px;
    }
    span {
      font-size: 16;
      font-weight: 600;
      color: var(--primary);
      white-space: nowrap;
    }
    strong {
      font-size: 18;
      color: var(--primary);
      font-weight: bold;
      margin-top: 8px;
      white-space: nowrap;
    }
    strong,
    span {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`;

export const SpanUnidade = styled.span`
  @media (max-width: 720px) {
    display: none;
  }

  font-size: 18px;
  font-weight: bold;
  color: var(--primary);
  margin: 16px;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ContainerBottom = styled.div`
  width: 95%;
  height: 40%;
  display: flex;
  flex-direction: column;

  @media (max-width: 720px) {
    width: 80px;
    height: 100%;
    align-items: center;
  }
`;

export const MenuBottom = styled(Link)`
  text-decoration: none;
  color: var(--primary);
  width: 95%;
  height: 40%;
  display: flex;
  align-items: center;
  padding: 20px 20px;
  border-bottom: 1px solid var(--primary);
  span {
    font-size: 18px;
    font-weight: bold;
    white-space: nowrap;
  }
  &:hover,
  &.active {
    color: red;
    border-bottom: 1px solid red;
    svg {
      fill: var(--alert);
    }
  }
  span {
    display: inline;
  }

  @media (max-width: 720px) {
    border-bottom: 0px;
    height: 60px;

    span {
      display: none;
    }
    svg {
      margin-top: 32px;
    }
    &:hover,
    &.active {
      color: red;
      border-bottom: 0px;
      svg {
        fill: var(--alert);
      }
    }
  }
`;

const iconCSS = css`
  flex-shrink: 0;

  width: 24px;
  height: 24px;
  fill: var(--primary);
  margin-right: 8px;
`;

export const IconHome = styled(Home)`
  ${iconCSS}
`;
export const IconTools = styled(Tools)`
  ${iconCSS}
`;
export const IconCar = styled(Car)`
  ${iconCSS}
`;
export const IconConductor = styled(Card)`
  ${iconCSS}
`;
export const IconChart = styled(Chart)`
  ${iconCSS}
`;
