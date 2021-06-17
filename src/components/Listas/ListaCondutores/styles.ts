import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  width: 95%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 18px;
  border: 4px solid var(--secundary);
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.2s;
  @media (max-width: 680px) {
    div:nth-child(1) {
      width: 55%;
    }
    div {
      svg {
        margin-right: 8px;
      }
      span {
        display: none;
      }
      span:nth-child(1) {
        display: inline;

        font-size: 16px;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }

  &:hover {
    transform: translateX(10px);
    border: 3px solid var(--primary);
    span {
      color: var(--primary);
    }
    svg {
      & path {
        fill: var(--primary);
      }
    }
  }
`;
export const ContainerDiv = styled.div`
  width: 70%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-right: 2px solid var(--secundary);
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  svg {
    width: 40px;
    height: 40px;
    margin-right: 16px;
    > path {
      fill: var(--secundary);
    }
  }
  span {
    font-size: 20px;
    color: var(--secundary);
    font-weight: 600;
    margin-right: 16px;
    font-size: 18px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
export const ConatainerAcoes = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    svg {
      width: 24px;
      height: 24px;
      path {
        fill: var(--secundary);
      }
    }
    span {
      font-size: 16px;
      color: var(--secundary);
      font-weight: 500;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`;
