import { ButtonAction } from '../../../components/ButtonAction';
import * as Styled from './Complications.styles';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export const Complications = () => {
  return (
    <Styled.Container>
    <ButtonAction
      icon={<AddCircleOutlineOutlinedIcon />}
      iconBackground="#1CA47E"
      iconColor="#FFF"
      text="Adicionar relatório"
      textColor="#FFF"
      hoverBackground="#5084d8"
      hoverColor="#FFF"
      onClick={() => {}}
    />
    <Styled.CardReport>
      <Styled.TitleReport>Relatório da Enfermagem</Styled.TitleReport>
        <Styled.ContentReport>
          <p>
          Às 12:00 o paciente queixou-se de náusea à equipe médica. Drª Marina Pereira CRM 12.345/SP prescreveu 1amp de Plásil EV. Administrado conforme prescrição médica.
          </p>
          <p>Coletado <span>hemograma e coagulograma</span> conforme orientação médica.</p>
          <div>Sem mais queixas, paciente segue em observação.</div>
          <div>Gisele Araujo Silva, Coren SP 123.456</div>
          <Styled.HourReport>12:20</Styled.HourReport>
        </Styled.ContentReport>
    </Styled.CardReport>
    <Styled.CardReport>
      <Styled.TitleReport>Relatório da Enfermagem</Styled.TitleReport>
        <Styled.ContentReport>
          <p>
          Na terceira hora de diálise paciente queixou-se para ir ao banheiro, foi informado à equipe médica, onde a Drª Marina Pereira CRM 12.345/SP orientou a equipe a encerrar a HD. O paciente cumpriu assim apenas 3h de HD nesta data.
          </p>
          <div>Segue em observação até o momento.</div>
          <div>Gisele Araujo Silva, Coren SP 123.456</div>
          <Styled.HourReport>13:45</Styled.HourReport>
        </Styled.ContentReport>
    </Styled.CardReport>
    </Styled.Container>
  )
}