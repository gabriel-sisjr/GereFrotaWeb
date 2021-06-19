import React, { SelectHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Container, Title, ContainerSelect } from './styles';

interface valuesProps {
  value: number;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  options?: valuesProps[];
}

const SelectItems: React.FC<SelectProps> = ({
  name,
  options,
  title,
  ...rest
}) => {
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {title && <Title>{title}</Title>}
      <ContainerSelect>
        <select
          className="select"
          {...rest}
          defaultValue={defaultValue}
          ref={selectRef}
        >
          <option selected>{rest.placeholder}</option>
          {options &&
            options.map(({ value, label }) => (
              <option value={value}>{label}</option>
            ))}
        </select>
      </ContainerSelect>
    </Container>
  );
};

export default SelectItems;
