import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #b8bae0;
  box-shadow: 0px 0px 10px 0px rgba(0,1,4,0);
  padding: 1rem;
  position: relative;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    width: 31%;
`;

export const FormTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: bold;
  color: #001459F2;
  text-align: center;
  padding: 20px 0;
  box-shadow: 0px 4px 4px 0px rgba(0,4,4,0);
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 10px;

  label {
    font-size: 1.3rem;
    font-weight: bold;
    color: #364887;
  }

  input,
  select {
  width: 18.75rem;
  height: 2.5rem;
  padding: 0.5rem;
  border: 1px solid #364887;
  border-radius: 6px;
  font-size: 1.5rem;
  }
`;

export const FormSubtitle = styled.h2`
  font-size: 18px;
  margin-top: 20px;
`;

export const Button = styled.button`
  width: 10%;
  height: 3.125rem;
  background-color: #001459F2;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
  position: absolute;
  right: 0px;
  bottom: -72px;

  &:hover {
    background-color: #001459;
  }
`;
