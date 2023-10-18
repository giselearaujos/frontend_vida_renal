import * as Styled from "./Header.styles";
import Logo from '../../assets/logo.svg';
import VidaRenal from '../../assets/VidaRenal.png';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export const Header = () => {
  return (
    <Styled.Container>      
      <Styled.Logo>
        <img src={Logo} alt="Logo que mostra um sistema de rins dentro de um circulo azul" />
        <img src={VidaRenal} alt="Minha Logo" />        
      </Styled.Logo>
      <Styled.Controls>
        <Styled.Icons>
          <SearchOutlinedIcon fontSize='large'/>
        </Styled.Icons>
        <Styled.Icons>
          <NotificationsNoneOutlinedIcon fontSize='large'/>
        </Styled.Icons>
        <Styled.Icons>
          <SettingsOutlinedIcon fontSize='large'/>
        </Styled.Icons>
      </Styled.Controls>
    </Styled.Container>
  );
}

