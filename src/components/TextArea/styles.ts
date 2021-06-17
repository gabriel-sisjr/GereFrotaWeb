import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 8px;
    font-size: 18px;
    color: var(--primary);
    font-weight: 500;
  }
`;
export const ContainerInput = styled.div<ContainerProps>`
  border: 1px solid var(--primary);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.isFocused &&
    css`
      color: var(--primary);
      border: 3px solid var(--primary);
    `}

  ${(props) =>
    props.isField &&
    css`
      fill: var(--primary);
      border: 3px solid var(--primary);
    `}

  textarea {
    width: 95%;
    font-size: 18px;
    color: var(--primary);
  }
`;
