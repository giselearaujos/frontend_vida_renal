import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  margin-left: 1rem;
  gap: 2rem;
  `;

export const CardReport = styled.div`
  display: flex;
  flex-direction: column;
  width: 70rem;
`;

export const TitleReport = styled.h3`
  font-size: 1.8rem;
  color: #001459F2;
`;

export const WrapperPannel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  `;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Rigth = styled.div`
  cursor: pointer;
  width: 5rem;
  height: 2rem;
  margin: 0 4rem;
`;

export const CircleName = styled.div`
  background-color: #364887;
  color: white;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`;

export const Date = styled.p`
  color: #808080;
  font-size: 1.4rem;
`;

export const WrapperPressureNote = styled.div`
  margin-left: 7rem;
`;

export const PressureText = styled.div`
  font-size: 1.4rem;
  color: #001459F2;
  font-weight: 700;
  padding-bottom: 1rem;
  
  span {
    color: #808080;
    font-size: 1.4rem;
  }
`;
