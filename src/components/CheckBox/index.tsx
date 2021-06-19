import React, { InputHTMLAttributes, useState, useRef, useEffect } from 'react';

import { useField } from '@unform/core';
import { Container } from './styles';

interface PropsCheck extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const CheckBox: React.FC<PropsCheck> = ({ name, ...rest }) => {
  const [check, isChecked] = useState(false);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'checked',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <input type="checkbox" defaultValue={defaultValue} ref={inputRef} />
    </Container>
  );
};

export default CheckBox;
