import React from 'react';
import { LinkProps } from 'react-router-dom';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface PropsLinks extends LinkProps {
  icon?: React.ComponentType<IconBaseProps>;
  nome: string;
}

const ButtonLink: React.FC<PropsLinks> = ({
  icon: Icon,
  to,
  nome,
  ...rest
}) => {
  return (
    <Container to={to} {...rest}>
      {Icon && <Icon />}
      <span>{nome}</span>
    </Container>
  );
};

export default ButtonLink;
