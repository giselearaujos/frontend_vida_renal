import * as Styled from './WelcomePage.styles';
import Logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

export const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <img src={Logo} alt='Logo do Projeto Vida Renal onde tem dois rins desenhados' style={{width: '50%', margin: 'inherit'}}/>
        <Styled.Title>CADASTRO</Styled.Title>
        <Styled.CheckedContainer>
            <Styled.Label>Eu sou:</Styled.Label>
          <Styled.Checked>
            <input type="checkbox" checked/>
            <p>Profissional da saúde</p>
          </Styled.Checked>
          <Styled.Checked>
            <input type="checkbox"/>
            <p>Paciente </p>
          </Styled.Checked>
        </Styled.CheckedContainer>
        <Styled.Input
          type="text"
          placeholder="Matrícula"
        />
        <Styled.Input
          type="password"
          placeholder="Senha"
        />
        <Styled.Input
          type="text"
          placeholder="Email"
        />
        <Styled.Label>Especialidade:</Styled.Label>
        <Styled.Select>
          <option value="opcao1">Enfermagem</option>
          <option value="opcao2">Nefrologista</option>
        </Styled.Select>
        <Styled.Button onClick={() => navigate('/patients')}>
          Cadastrar
        </Styled.Button>
      </Styled.Wrapper>
    </Styled.Container>
  )
};