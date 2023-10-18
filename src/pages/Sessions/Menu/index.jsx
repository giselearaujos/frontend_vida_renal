import { useState } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Menu.styles';

export const Menu = ({ setSelectedMenuItem }) => {
  const [activeMenuItem, setActiveMenuItem] = useState('Relatório');

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
    setActiveMenuItem(menuItem);
  };

  return (
    <Styled.MenuContainer>
      <Styled.MenuItem
        onClick={() => handleMenuItemClick('Relatório')}
        active={activeMenuItem === 'Relatório'}
      >
        Relatório
      </Styled.MenuItem>
      <Styled.MenuItem
        onClick={() => handleMenuItemClick('Informações')}
        active={activeMenuItem === 'Informações'}
      >
        Informações
      </Styled.MenuItem>
      <Styled.MenuItem
        onClick={() => handleMenuItemClick('Intercorrências')}
        active={activeMenuItem === 'Intercorrências'}
      >
        Intercorrências
      </Styled.MenuItem>
      <Styled.MenuItem
        onClick={() => handleMenuItemClick('Notas do Paciente')}
        active={activeMenuItem === 'Notas do Paciente'}
      >
        Notas do Paciente
      </Styled.MenuItem>
    </Styled.MenuContainer>
  );
};

Menu.propTypes = {
  setSelectedMenuItem: PropTypes.func.isRequired,
};