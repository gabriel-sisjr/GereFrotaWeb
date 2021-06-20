import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  width: 22vh;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--primary);
  border-radius: 10px;
  text-decoration: none;

  svg {
    width: 50px;
    height: 50px;
    margin-bottom: 16px;
    color: var(--white);
  }
  span {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: var(--white);
  }
  :hover {
    background-color: var(--secundary);
    cursor: pointer;
  }
`;
