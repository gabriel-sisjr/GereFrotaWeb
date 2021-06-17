import React, {
  TextareaHTMLAttributes,
  useRef,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { useField } from '@unform/core';
import { Container, ContainerInput } from './styles';

interface TextProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
}
const TextArea: React.FC<TextProps> = ({ name, label, ...rest }) => {
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isField, setIsField] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleTextFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  const handleTextBlur = useCallback(() => {
    setIsFocused(false);
    setIsField(!!textRef.current?.value);
  }, []);

  return (
    <Container>
      {label && <span>{label}</span>}
      <ContainerInput isField={isField} isFocused={isFocused}>
        <textarea
          {...rest}
          rows={5}
          ref={textRef}
          defaultValue={defaultValue}
          onFocus={handleTextFocus}
          onBlur={handleTextBlur}
        />
      </ContainerInput>
    </Container>
  );
};

export default TextArea;
