import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 15.75rem;
  width: calc(100% - 15.75rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #364887;
  background-color: #FFFFFF;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Controls = styled.div `
  display: flex;
  gap: 30px;
`;

export const Icons = styled.div `
  display: flex;
  align-items: center;
  background-color: #36488769;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
`;