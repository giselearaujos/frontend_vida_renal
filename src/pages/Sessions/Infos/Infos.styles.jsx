import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  width: 100%;
  height: 100%;
  margin-left: 1rem;
  gap: 5rem;
  `;

export const Card = styled.div`
  border: 1px solid #A0AADF91;
  padding: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `;

export const Content = styled.div`
  display: flex;  
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 23rem;
  flex-direction: column;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;  
  width: 15rem;  
  justify-content: space-between;  
`;

export const Label = styled.h3`
  font-size: 1rem;
  color: #364887;
  font-weight: 700;
`;

export const Data = styled.div`
  font-size: 1rem;
  text-align: center;
  width: 6rem;
  border-radius: 5px;
  background-color: #DCDCDC80;
`;

export const Type = styled.div`
  font-size: 1rem;
  color: #364887;
  font-weight: 700;
`;

export const Footer = styled.div`
  display: flex;
  margin: 1rem 0;  
`;

export const InfoFooter = styled.div`
  display: flex;
  align-items: center;    
  justify-content: space-between;
  gap: 1rem;  
  padding-right: 1rem;
`;