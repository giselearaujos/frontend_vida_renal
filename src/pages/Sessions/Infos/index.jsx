import * as Styled from './Infos.styles';
import { ButtonAction } from '../../../components/ButtonAction';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export const Infos = () => {
  return (
    <Styled.Container>
      <ButtonAction
        icon={<AddCircleOutlineOutlinedIcon />}
        iconBackground="#1CA47E"
        iconColor="#FFF"
        text="Adicionar dados"
        textColor="#FFF"
        hoverBackground="#5084d8"
        hoverColor="#FFF"
        onClick={() => {}}
      />
      <div>
        <Styled.Card>
          <Styled.Content>
          <Styled.Wrapper>
            <Styled.Info>
              <Styled.Label>Peso seco:</Styled.Label>
              <Styled.Data>70</Styled.Data>
              <Styled.Type>Kg</Styled.Type>
            </Styled.Info>
            <Styled.Info>
              <Styled.Label>Peso pré:</Styled.Label>
              <Styled.Data>72,6</Styled.Data>
              <Styled.Type>Kg</Styled.Type>
            </Styled.Info>
            <Styled.Info>
              <Styled.Label>Peso pós:</Styled.Label>
              <Styled.Data>70</Styled.Data>
              <Styled.Type>Kg</Styled.Type>
            </Styled.Info>
            <Styled.Info>
              <Styled.Label>Perda:</Styled.Label>
              <Styled.Data>2,6</Styled.Data>
              <Styled.Type>Kg</Styled.Type>
            </Styled.Info>
          </Styled.Wrapper>
          <Styled.Wrapper>
            <Styled.Info>
              <Styled.Label>P.A Pré diálise:</Styled.Label>
              <Styled.Data>130x90</Styled.Data>
            </Styled.Info>
            <Styled.Info>
              <Styled.Label>P.A na 1ª Hora:</Styled.Label>
              <Styled.Data>110x80</Styled.Data>
            </Styled.Info>
            <Styled.Info>
              <Styled.Label>P.A na 2ª Hora:</Styled.Label>
              <Styled.Data>120x80</Styled.Data>
            </Styled.Info>
            <Styled.Info>
              <Styled.Label>P.A Pós diálise:</Styled.Label>
              <Styled.Data>120X80</Styled.Data>
            </Styled.Info>
          </Styled.Wrapper>
          <Styled.Wrapper>
            <Styled.Info>
              <Styled.Label>Entrada: </Styled.Label>
              <Styled.Data>10:25h</Styled.Data>
            </Styled.Info>
            <Styled.Info>
              <Styled.Label>Saída:</Styled.Label>
              <Styled.Data>14:15h</Styled.Data>
            </Styled.Info>
            <Styled.Info>
              <Styled.Label>Tempo de HD:</Styled.Label>
              <Styled.Data>3:30h</Styled.Data>
            </Styled.Info>
            <Styled.Info>
              <Styled.Label>Tempo cumprido:</Styled.Label>
              <Styled.Data>3:00h</Styled.Data>
            </Styled.Info>
          </Styled.Wrapper>
          </Styled.Content>
          <Styled.Footer>
            <Styled.InfoFooter>
              <Styled.Label>Acesso:</Styled.Label>
              <input type="checkbox" />
              <Styled.Data>Agulha 15</Styled.Data>
            </Styled.InfoFooter>
            <Styled.InfoFooter>
              <input type="checkbox" />
              <Styled.Data>Agulha 16</Styled.Data>
            </Styled.InfoFooter>
            <Styled.InfoFooter>
              <input type="checkbox" />
              <Styled.Data>Agulha 17</Styled.Data>
            </Styled.InfoFooter>
            <Styled.InfoFooter>
              <Styled.Label>Soluções:</Styled.Label>
              <input type="checkbox" />
              <Styled.Data>Básica 3.5</Styled.Data>
            </Styled.InfoFooter>
            <Styled.InfoFooter>
              <input type="checkbox" />
              <Styled.Data>Ácida F2</Styled.Data>
            </Styled.InfoFooter>
            <Styled.InfoFooter>
              <input type="checkbox" />
              <Styled.Data>Ácida F3</Styled.Data>
            </Styled.InfoFooter>
          </Styled.Footer>
          <Styled.Footer>
            <Styled.InfoFooter>
              <Styled.Label>Fluxo:</Styled.Label>
              <Styled.Data>350</Styled.Data>
              <Styled.Type>ml/min</Styled.Type>
            </Styled.InfoFooter>
            <Styled.InfoFooter>
              <Styled.Label>Heparina:</Styled.Label>
              <Styled.Data>3</Styled.Data>
              <Styled.Type>ml</Styled.Type>
            </Styled.InfoFooter>
          </Styled.Footer>
        </Styled.Card>
      </div>
    </Styled.Container>
  )
}