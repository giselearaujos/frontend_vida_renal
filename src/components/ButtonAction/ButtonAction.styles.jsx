import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${(props) => props.iconBackground || 'transparent'};
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 20px;
  color: ${(props) => props.textColor || '#000'};
  text-decoration: none !important;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) => props.hoverBackground || props.iconBackground || 'transparent'};
    color: ${(props) => props.hoverColor || props.textColor || '#000'};
  }
`;

export const ButtonIcon = styled.span`
  font-size: 16px;
  color: ${(props) => props.iconColor || '#000'};
`;

export const ButtonText = styled.span`
  font-size: 18px;
`;

export const CustomLink = styled(Link)`
  text-decoration: none; 
  color: inherit; 
`;