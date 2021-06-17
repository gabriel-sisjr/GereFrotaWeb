import React from 'react';
import { IconBaseProps } from 'react-icons';

import { Header } from './styles';

interface HeaderProps {
  title: string;
  icon: React.ComponentType<IconBaseProps>;
}

const TitlePages: React.FC<HeaderProps> = ({ icon: Icon, title }) => {
  return (
    <Header>
      <Icon />
      <h1>{title}</h1>
    </Header>
  );
};

export default TitlePages;
