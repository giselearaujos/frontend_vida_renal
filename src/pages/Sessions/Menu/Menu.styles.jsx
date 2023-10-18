import styles from 'styled-components';

export const MenuContainer = styles.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 17rem;
`;

export const MenuItem = styles.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  width: 100%;
  height: 3.5rem;
  color: #364887;
  background-color: #fff;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #5A92F080;
  }
  background-color: ${({ active }) => (active ? '#AFC6F7' : '#FFFFFF')};
`;

