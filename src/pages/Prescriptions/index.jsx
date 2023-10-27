import * as Styled from './Prescriptions.styles';
import { ButtonAction } from '../../components/ButtonAction';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import ImgPDF from '../../assets/pdf.svg';
import Prescription from '../../assets/prescrições.svg'
import { Divider } from '../../components/Divider';

export const Prescriptions = () => {
  return (
    <Styled.Content>
      <Styled.Container>
        <Styled.Block><img src={Prescription} alt='Imagem vetorial de uma menina feliz'/></Styled.Block>
        <Styled.Title>Últimas buscas</Styled.Title>
        <Styled.Wrapper>
          <Styled.Item>
            <Styled.Label>Medicamento</Styled.Label>
            <Styled.Data>Polaramine</Styled.Data>
          </Styled.Item>
          <Styled.Item>
            <Styled.Label>Uso</Styled.Label>
            <Styled.Data>Oral</Styled.Data>
          </Styled.Item>
          <Styled.Item>
            <Styled.Label>Data</Styled.Label>
            <Styled.Data>04/09/2023</Styled.Data>
          </Styled.Item>
          <Styled.Item>
            <Styled.Label>Solicitante</Styled.Label>
            <Styled.Data>Drª Marina Pereira</Styled.Data>
          </Styled.Item>
        </Styled.Wrapper>
        <Styled.Subtitle>Receitas</Styled.Subtitle>
        <Styled.Card>
          <Styled.Exams>
            <Styled.Data>Polaramine</Styled.Data>
            <div>
              <img
                src={ ImgPDF }
                alt="Imagem PDF vetorial"
                style={{}}
              />
            </div>
          </Styled.Exams>
          <Styled.Exams>
            <Styled.Data>Renagel</Styled.Data>
            <div>
              <img
                src={ ImgPDF }
                alt="Imagem PDF vetorial"
                style={{}}
              />
            </div>
          </Styled.Exams>
          <Styled.Exams>
            <Styled.Data style={{color: '#C23617'}}>Amoxilina</Styled.Data>
            <div>
              <img
                src={ ImgPDF }
                alt="Imagem PDF vetorial"
                style={{}}
              />
            </div>
          </Styled.Exams>
          <Styled.Exams>
            <Styled.Data style={{color: '#C23617'}}>Prednisona</Styled.Data>
            <div>
              <img
                src={ ImgPDF }
                alt="Imagem PDF vetorial"
                style={{}}
              />
            </div>
          </Styled.Exams>
        </Styled.Card>
        <ButtonAction
          icon={<DownloadForOfflineIcon />}
          iconBackground="#5084d8"
          iconColor="#000"
          text="Baixar todas as receitas"
          textColor="#000"
          hoverBackground="#86a9e0"
          hoverColor="#FFF"
          onClick={() => {}}
        />
      </Styled.Container>
      <Divider />
      <Styled.ContainerRight>
      <Styled.BtnAndSearch>
        <ButtonAction
          icon={<BloodtypeIcon/>}
          iconBackground="#1CA47E"
          iconColor="#FFF"
          text="Adicionar receita"
          textColor="#FFF"
          hoverBackground="#5084d8"
          hoverColor="#FFF"
          onClick={() => {}}
        />
        <input
          type='text'
          placeholder={'Buscar receitas'}
          style={{
            width: '34rem',
            height: '3rem',
            borderRadius: '1.5rem',
            margin: '1rem 0',
            fontSize: '1.5rem',
            color: '#00000099',
            textAlign: 'center'
          }}
        />
      </Styled.BtnAndSearch>
      <Styled.Title style={{textAlign: 'center'}}>Últimas prescrições</Styled.Title>
      <Styled.Table>
        <Styled.THead>
          <Styled.Line>Medicamento</Styled.Line>
          <Styled.Line>Solicitante</Styled.Line>
          <Styled.Line>Data</Styled.Line>
          <Styled.Line>Uso</Styled.Line>
          <Styled.Line>Departamento</Styled.Line>
          <Styled.Line>Status</Styled.Line>
        </Styled.THead>
        <Styled.TBody>
          <Styled.Line>Polaramine</Styled.Line>
          <Styled.Line>Drª Marina Pereira</Styled.Line>
          <Styled.Line>04/10/2023</Styled.Line>
          <Styled.Line>Oral</Styled.Line>
          <Styled.Line>Médico</Styled.Line>
          <Styled.Line>
            <span>
            <CheckCircleIcon style={{color: '#5fa67e'}} />
              Em uso
            </span>
          </Styled.Line>
        </Styled.TBody>
        <Styled.TBody>
          <Styled.Line>Renagel</Styled.Line>
          <Styled.Line>Fabiola Negrini</Styled.Line>
          <Styled.Line>04/10/2023</Styled.Line>
          <Styled.Line>Oral</Styled.Line>
          <Styled.Line>Oral</Styled.Line>
          <Styled.Line>
            <span>
            <CheckCircleIcon style={{color: '#5fa67e'}} />
            Em uso
            </span>
          </Styled.Line>
        </Styled.TBody>
        <Styled.TBody>
          <Styled.Line>Amoxilina</Styled.Line>
          <Styled.Line>Dr Yuri Brito</Styled.Line>
          <Styled.Line>11/09/2023</Styled.Line>
          <Styled.Line>Endovenoso</Styled.Line>
          <Styled.Line>Médico</Styled.Line>
          <Styled.Line>
            <span>
            <CancelIcon style={{color: '#c33e17'}}/>
              Expirado
            </span>
          </Styled.Line>
        </Styled.TBody>
        <Styled.TBody>
          <Styled.Line>Prednisona</Styled.Line>
          <Styled.Line>Dr Yuri Brito</Styled.Line>
          <Styled.Line>11/09/2023</Styled.Line>
          <Styled.Line>Oral</Styled.Line>
          <Styled.Line>Médico</Styled.Line>
          <Styled.Line>
            <span>
              <CancelIcon style={{color: '#c33e17'}}/>
              Expirado
            </span>
          </Styled.Line>
        </Styled.TBody>
        <Styled.TBody>
          <Styled.Line>Captopril (dose única)</Styled.Line>
          <Styled.Line>Draª Marina Pereira</Styled.Line>
          <Styled.Line>01/09/2023</Styled.Line>
          <Styled.Line>Sublingual</Styled.Line>
          <Styled.Line>Médico</Styled.Line>
          <Styled.Line>
            <span>
            <CancelIcon style={{color: '#c33e17'}}/>
              Expirado
            </span>
          </Styled.Line>
        </Styled.TBody>
      </Styled.Table>
      </Styled.ContainerRight>
    </Styled.Content>
  );
}