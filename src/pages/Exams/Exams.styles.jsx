import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 1rem;
`;

export const Block = styled.div`
  img {
    width: 250px;
    height: 170px;
  }
`;

export const Title = styled.h3`
  font-size: 1.8rem;
  padding: 1rem 0;
  color: #364887;
  font-weight: normal;
`;

export const Subtitle = styled.h3`
  font-size: 1.2rem;
  padding: 1rem 0 0;
  color: #364887;
  font-weight: normal;
`;

export const  Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 3px solid #A0AADFF2;
  padding-left: 0.5rem;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
`;

export const Label = styled.div`
  font-size: 1rem;
  color: #364887;
  font-weight: bold;
`;

export const Data = styled.div`
  font-size: 1rem;
`;

export const Card = styled.div`
  width: 16rem;
  height: 11rem;
  margin-bottom: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Exams = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid;
  margin: 1rem;
  cursor: pointer;
`;

export const ContainerRight = styled.div`
  width: 100vw;
`;

export const BtnAndSearch = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%
`;

export const Table = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  padding: 1rem;
`;

export const THead = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.6rem;
  color: #364887B2;
  font-weight: bold;
  padding: 1rem 0;
`;

export const TBody = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  color: #222222;
  border-top: 1px solid #A0AADF99;
  padding: 2rem 0;
`;

export const Line = styled.div`
  width: 12rem;
  text-align: start;

  span {
    display: flex;
    gap: 1rem;
  }
`;