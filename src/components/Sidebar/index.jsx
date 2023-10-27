
import * as Styled from "./Sidebar.styles";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AutoAwesomeMotionOutlinedIcon from '@mui/icons-material/AutoAwesomeMotionOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <Styled.SidebarWrapper>
      <Styled.SidebarList>
        <Styled.SidebarItem>
          <NavLink to="/patients">
            <HomeOutlinedIcon fontSize='large'/>
            Início
          </NavLink>
        </Styled.SidebarItem>
        <Styled.SidebarItem>
          <NavLink to="/sessions">
            <CalendarMonthOutlinedIcon fontSize='large'/>
            Sessões
          </NavLink>
        </Styled.SidebarItem>
        <Styled.SidebarItem>
          <NavLink to="/tips">
            <AutoAwesomeMotionOutlinedIcon fontSize='large'/>
            Dicas
          </NavLink>
        </Styled.SidebarItem>
        <Styled.SidebarItem>
          <NavLink to="/prescriptions">
            <DescriptionOutlinedIcon fontSize='large'/>
            Prescrições
          </NavLink>
        </Styled.SidebarItem>
        <Styled.SidebarItem>
          <NavLink to="/exams">
            <MonitorHeartOutlinedIcon fontSize='large'/>
            Exames
          </NavLink>
        </Styled.SidebarItem>
      </Styled.SidebarList>
    </Styled.SidebarWrapper>
  );
};

