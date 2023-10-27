import * as Styled from './Report.styles';
import { ButtonAction } from '../../../components/ButtonAction';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export const Report = () => {
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
            Paciente Benedito da Silva deu entrada ao setor de hemodiálise às 10:25, deambulando sem auxílio, apresentou-se consciente e orientado, pesando 72,6kg com P.A 130x90mmHg e T 36,3ºC. Aceitou integralmente sua dieta, fez uso de 2 comprimidos de Renagel, 1 dose de Hemax.
          </p>
          <div>Segue em observação até o momento.</div>
          <div>Gisele Araujo Silva, Coren SP 123.456</div>
          <Styled.HourReport>11:45</Styled.HourReport>
        </Styled.ContentReport>
      </Styled.CardReport>
      <Styled.CardReport>
        <Styled.TitleReport>Relatório Médico</Styled.TitleReport>
        <Styled.ContentReport>
          <p>
          Durante a passagem de rotina, seu Benedito informou que está sentindo muita náusea em todo começo de diálise, orientei a equipe de enfermagem a <span>administrar 1am de Plásil EV. Solicitei exames</span> de rotina e recomendei  fazer uma dieta leve pela manhã antes de toda sessão. Não apresentou outras queixas.
          </p>
          <div>Marina Pereira, CRM 12.345/SP</div>
          <Styled.HourReport>12:00</Styled.HourReport>
        </Styled.ContentReport>
      </Styled.CardReport>
    </Styled.Container>
  )
}