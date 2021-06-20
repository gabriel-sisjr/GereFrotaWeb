import React from 'react';
import { IconBaseProps } from 'react-icons';
import { LinkProps } from 'react-router-dom';
import { Container } from './styles';

interface PropsLinks extends LinkProps {
  icon: React.ComponentType<IconBaseProps>;
  to: string;
  name: string;
}

const ButtonMenu: React.FC<PropsLinks> = ({
  icon: Icon,
  to,
  name,
  ...rest
}) => {
  return (
    <Container to={to} {...rest}>
      <Icon />
      <span>{name}</span>
    </Container>
  );
};

export default ButtonMenu;
