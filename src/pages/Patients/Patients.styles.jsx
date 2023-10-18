import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin: 1.8rem;
  
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  border-radius: 8px;
  overflow: hidden;
`;

export const Th = styled.th`
  color: #fff;
  background-color: #364887;
  border: 1px solid #ddd;  
  text-align: left;
  padding: 12px;
  font-size: 1.5rem;
  font-weight: bold;  
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 12px;
  font-size: 1.5rem;  
  transition: background-color 0.2s;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px; 
  font-size: 1.5rem;
  font-weigth: 600;
  color: #364887; 
`;
