import React, { InputHTMLAttributes, useState, useRef, useEffect } from 'react';

import { useField } from '@unform/core';
import { InputCheck } from './styles';

interface PropsCheck extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const CheckBox: React.FC<PropsCheck> = ({ name, ...rest }) => {
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
    <InputCheck
      type="checkbox"
      defaultValue={defaultValue}
      ref={inputRef}
      {...rest}
    />
  );
};

export default CheckBox;
