import styled from "styled-components";
import { Badge } from "rsuite"; 

export const Wrapper = styled.div`
  display: flex;  
  align-items: center;
  height: 100%;
`;

export const SessionsContainer = styled.div`
  display: flex;
  flex-direction: column;  
  width: 20%;
`;

export const CalendarBadge = styled(Badge)`
  vertical-align: top;
  margin-top: 8px;
  width: 6px;
  height: 6px;
`;