import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  width: 200px;
  height: 60px;
  display: flex;
  position: sticky;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: var(--primary);
  color: var(--white);
  margin-bottom: 24px;
  border-radius: 6px;
  svg {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    fill: var(--white);
  }
  :hover {
    cursor: pointer;
    background-color: var(--secundary);
  }
`;
