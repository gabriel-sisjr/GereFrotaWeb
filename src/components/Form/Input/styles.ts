import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 18px;
    font-weight: 500;
    color: var(--primary);
    margin-bottom: 8px;
  }
`;

export const ContainerInput = styled.div<ContainerProps>`
  border: 1px solid var(--primary);
  border-radius: 5px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${(props) =>
    props.isFocused &&
    css`
      border: 3px solid var(--primary);
    `}

  ${(props) =>
    props.isField &&
    css`
      border: 3px solid var(--primary);
    `}


  input {
    background: transparent;
    border: 0;
    margin-left: 8px;
    align-items: center;
    text-align: center;
    font-size: 18px;
    color: var(--primary);
  }

  > svg {
    margin-right: 16px;
    margin-left: 8px;
    color: var(--secundary);
    width: 24px;
    height: 24px;

    ${(props) =>
      props.isFocused &&
      css`
        color: var(--primary);
      `}

    ${(props) =>
      props.isField &&
      css`
        color: var(--primary);
      `}
  }
`;
