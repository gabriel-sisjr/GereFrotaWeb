import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  width: 95%;
  height: 90px;
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  border: 4px solid var(--confirm);
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.2s;

  &:hover {
    transform: translateX(10px);
    border: 3px solid var(--hover);
    div {
      border-right: 2px solid var(--hover);
    }
    div:last-child {
      border-right: 0;
    }
    & svg,
    strong {
      color: var(--hover);
    }
  }

  div {
    flex: 1;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 2px solid var(--confirm);
    > svg {
      width: 40px;
      height: 40px;
      color: var(--confirm);
      margin-right: 18px;
    }
    strong {
      font-size: 24px;
      font-weight: bold;
      color: var(--confirm);
    }
  }
  div:last-child {
    border-right: 0;
  }

  @media (max-width: 680px) {
    margin-left: 8px;

    div {
      svg {
        margin-right: 0;
        margin-left: 8px;
      }
      strong {
        margin-left: 8px;
        font-size: 18px;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
    div:nth-child(2) {
      display: none;
    }
  }
`;
