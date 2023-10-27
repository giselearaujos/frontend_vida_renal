import { ButtonAction } from '../../components/ButtonAction';
import * as Styled from './Exams.styles';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import ImgPDF from '../../assets/pdf.svg';
import Exame from '../../assets/exames.svg'
import { Divider } from '../../components/Divider';

export const Exams = () => {
  return (
    <Styled.Content>
      <Styled.Container>
        <Styled.Block><img src={Exame} alt='Imagem vetorial de rins'/></Styled.Block>
        <Styled.Title>Últimas buscas</Styled.Title>
        <Styled.Wrapper>
          <Styled.Item>
            <Styled.Label>Local</Styled.Label>
            <Styled.Data>Laboratório São José</Styled.Data>
          </Styled.Item>
          <Styled.Item>
            <Styled.Label>Tipo de exame</Styled.Label>
            <Styled.Data>Exame Laboratorial</Styled.Data>
          </Styled.Item>
          <Styled.Item>
            <Styled.Label>Data</Styled.Label>
            <Styled.Data>27/09/2023</Styled.Data>
          </Styled.Item>
          <Styled.Item>
            <Styled.Label>Solicitante</Styled.Label>
            <Styled.Data>Drª Marina Pereira</Styled.Data>
          </Styled.Item>
        </Styled.Wrapper>
        <Styled.Subtitle>Resultados</Styled.Subtitle>
        <Styled.Card>
          <Styled.Exams>
            <Styled.Data>Hemograma Completo</Styled.Data>
            <div>
              <img
                src={ ImgPDF }
                alt="Imagem PDF vetorial"
                style={{}}
              />
            </div>
          </Styled.Exams>
          <Styled.Exams>
            <Styled.Data>Creatina</Styled.Data>
            <div>
              <img
                src={ ImgPDF }
                alt="Imagem PDF vetorial"
                style={{}}
              />
            </div>
          </Styled.Exams>
          <Styled.Exams>
            <Styled.Data>Sódio</Styled.Data>
            <div>
              <img
                src={ ImgPDF }
                alt="Imagem PDF vetorial"
                style={{}}
              />
            </div>
          </Styled.Exams>
          <Styled.Exams>
            <Styled.Data>Potássio</Styled.Data>
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
          iconBackground="#001459"
          iconColor="#fff"
          text="Baixar todos os exames"
          textColor="#fff"
          hoverBackground="#86a9e0"
          hoverColor="#FFF"
          onClick={() => {}}
        />
      </Styled.Container>
      <Divider />
      <Styled.ContainerRight>
      <Styled.BtnAndSearch>
        <div>
          <ButtonAction
            icon={<BloodtypeIcon/>}
            iconBackground="#1CA47E"
            iconColor="#FFF"
            text="Solicitar exames"
            textColor="#FFF"
            hoverBackground="#5084d8"
            hoverColor="#FFF"
            onClick={() => {}}
          />
        </div>
        <input
          type='text'
          placeholder={'Buscar'}
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
      <Styled.Title style={{textAlign: 'center'}}>Últimas solicitações</Styled.Title>
      <Styled.Table>
        <Styled.THead>
          <Styled.Line>Tipo de Exame</Styled.Line>
          <Styled.Line>Solicitante</Styled.Line>
          <Styled.Line>Data</Styled.Line>
          <Styled.Line>Local</Styled.Line>
          <Styled.Line>Departamento</Styled.Line>
          <Styled.Line>Status</Styled.Line>
        </Styled.THead>
        <Styled.TBody>
          <Styled.Line>Hemograma Completo</Styled.Line>
          <Styled.Line>Drª Marina Pereira</Styled.Line>
          <Styled.Line>04/10/2023</Styled.Line>
          <Styled.Line>Interno</Styled.Line>
          <Styled.Line>Interno</Styled.Line>
          <Styled.Line>
            <span>
              <AccessTimeFilledIcon style={{color: '364887'}}/>
              Em processamento
            </span>
          </Styled.Line>
        </Styled.TBody>
        <Styled.TBody>
          <Styled.Line>Em processamento</Styled.Line>
          <Styled.Line>Dr Yuri Brito</Styled.Line>
          <Styled.Line>29/09/2023</Styled.Line>
          <Styled.Line>Interno</Styled.Line>
          <Styled.Line>Médico</Styled.Line>
          <Styled.Line>
            <span>
            <AccessTimeFilledIcon style={{color: '364887'}}/>
            Em processamento
            </span>
          </Styled.Line>
        </Styled.TBody>
        <Styled.TBody>
          <Styled.Line>Exame de Imagem</Styled.Line>
          <Styled.Line>Drª Marina Pereira</Styled.Line>
          <Styled.Line>04/09/2023</Styled.Line>
          <Styled.Line>Externo</Styled.Line>
          <Styled.Line>Médico</Styled.Line>
          <Styled.Line>
            <span>
              <CheckCircleIcon style={{color: '#5fa67e'}} />
              Finalizado
            </span>
          </Styled.Line>
        </Styled.TBody>
        <Styled.TBody>
          <Styled.Line>Exame Laboratorial</Styled.Line>
          <Styled.Line>Dr Alexandre Toshiba</Styled.Line>
          <Styled.Line>01/09/2023</Styled.Line>
          <Styled.Line>Externo</Styled.Line>
          <Styled.Line>Médico</Styled.Line>
          <Styled.Line>
            <span>
              <CancelIcon style={{color: '#c33e17'}}/>
              Cancelado
            </span>
          </Styled.Line>
        </Styled.TBody>
        <Styled.TBody>
          <Styled.Line>Potássio | Ferratina</Styled.Line>
          <Styled.Line>Fabiola Negrini </Styled.Line>
          <Styled.Line>01/09/2023</Styled.Line>
          <Styled.Line>Interno</Styled.Line>
          <Styled.Line>Nutricional</Styled.Line>
          <Styled.Line>
            <span>
              <CheckCircleIcon style={{color: '#5fa67e'}} />
              Finalizado
            </span>
          </Styled.Line>
        </Styled.TBody>
      </Styled.Table>
      </Styled.ContainerRight>
    </Styled.Content>
  );
}