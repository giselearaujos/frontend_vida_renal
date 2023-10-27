import * as Styled from './Sessions.styles'
import { Calendar } from "rsuite";
import '../../../node_modules/rsuite/dist/rsuite.css'
import { Menu } from './Menu';
import { Divider } from '../../components/Divider';
import { useState } from 'react';
import { Report } from './Report';
import { Infos } from './Infos';
import { Complications } from './Complications';
import { Notes } from './Notes';

export const Sessions = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('Relatório');
  return (
    <Styled.Wrapper>
    <Styled.SessionsContainer>
      <div style={{ width: 280 }}>
        <Calendar compact bordered />
      </div>
      <Menu setSelectedMenuItem={setSelectedMenuItem} />
    </Styled.SessionsContainer>
    <Divider />
    {selectedMenuItem === 'Relatório' && <Report />}
    {selectedMenuItem === 'Informações' && <Infos />}
    {selectedMenuItem === 'Intercorrências' && <Complications />}
    {selectedMenuItem === 'Notas do Paciente' && <Notes />}
  </Styled.Wrapper>
  );
}