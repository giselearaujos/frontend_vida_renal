import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
  width: 15.625rem;
  height: 100vh;
  background-color: #364887;
  position: fixed;
  top: 0;
  left: 0;
`;

export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  padding-top: 108px;
`;

export const SidebarItem = styled.li`
  a {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 24px 20px;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    background-color: ${(props) => (props.active ? '#5A92F0' : 'transparent')};
    transition: background-color 0.3s;

    &.active {
      background-color: #5A92F0;
    }

    &:hover {
      background-color: #5cadf9;
    }
  }
`;

