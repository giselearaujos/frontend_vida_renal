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
border: 1px solid #A0AADF91;
padding: 1rem;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
gap: 20px;
`;

export const TitleReport = styled.h3`
font-size: 1.6rem;
font-weight: 400;
color: #001459F2;
`;

export const ContentReport = styled.h3`
font-size: 1rem;
text-align: justify;

p {
line-height: 1.5rem;

span {
  color: #364887;
  text-decoration: underline;
}
}
`;

export const HourReport = styled.div`
color: #001459F2;
font-size: 1.6rem;
text-align: end;
`;
