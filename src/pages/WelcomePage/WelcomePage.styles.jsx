import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 99%;
  justify-content: center;
  position: absolute;
  left: 1px;
  padding-bottom: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 600px;
  padding: 0 20px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Title = styled.div`
  font-size: 3rem;
  color: #364887;
  font-weight: bold;
  margin: inherit;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Label = styled.div`
  font-size: 1rem;
  color: #364887;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const CheckedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Checked = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 768px) {
    margin-right: 1rem;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  width: 12rem;
  height: 4rem;
  background-color: #364887;
  border-radius: 1.5rem;
  margin: 1rem 0;
  font-size: 1.5rem;
  color: #FFFFFF;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: auto;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 100%;
  max-width: 24rem;
  height: 4rem;
  background-color: #EFEDEDCC;
  border-radius: 1.5rem;
  margin: 1rem 0;
  font-size: 1.5rem;
  color: #7F7C7CB2;
  text-align: center;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Select = styled.select`
  width: 100%;
  max-width: 24rem;
  height: 4rem;
  background-color: #EFEDEDCC;
  border-radius: 1.5rem;
  margin: 1rem 0;
  font-size: 1.5rem;
  color: #7F7C7CB2;
  text-align: center;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;