import styled from "styled-components";

export const InputWrapper = styled.input`
  background-color: ${(props) => props.bg || '#DCDCDC80'};
  height: 23px;
  font-size: 1.3rem;
  padding: 4px 8px;
  border-radius: 4px;
  border: none;
  outline: none;
  width: ${(props) => props.width || '18.75rem'};
`;
