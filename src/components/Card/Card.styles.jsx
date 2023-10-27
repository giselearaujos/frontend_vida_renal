import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 700px;
  height: 157px;
  border: 1px solid #00069599;
  display: flex;
  align-items: center;
  padding: 1rem;
  box-shadow: 0px 1px 4px #00069599;
  background-color: #F9F9F9;
`;

export const CardImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 16px;
`;

export const CardText = styled.p`
  font-size: 1.3rem;
  color: #333;
`;