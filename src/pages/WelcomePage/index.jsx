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
        <input 
        type='text'
        placeholder='Matrícula'
        style={{
          width: '24rem',
          height: '4rem',
          backgroundColor: '#EFEDEDCC',
          borderRadius: '1.5rem',
          margin: '1rem 0',
          fontSize: '1.5rem',
          color: '#7F7C7CB2',
          textAlign: 'center'
        }}
        />
        <input 
        type='password'
        placeholder='Senha'
        style={{
          width: '24rem',
          height: '4rem',
          backgroundColor: '#EFEDEDCC',
          borderRadius: '1.5rem',
          margin: '1rem 0',
          fontSize: '1.5rem',
          color: '#7F7C7CB2',
          textAlign: 'center'
        }}
        />
        <input 
        type='text'
        placeholder='Email'
        style={{
          width: '24rem',
          height: '4rem',
          backgroundColor: '#EFEDEDCC',
          borderRadius: '1.5rem',
          margin: '1rem 0',
          fontSize: '1.5rem',
          color: '#7F7C7CB2',
          textAlign: 'center'
        }}
        />
        <Styled.Label>Especialidade:</Styled.Label>
        <select
        type='text'
        style={{
          width: '24rem',
          height: '4rem',
          backgroundColor: '#EFEDEDCC',
          borderRadius: '1.5rem',
          margin: '1rem 0',
          fontSize: '1.5rem',
          color: '#7F7C7CB2',
          textAlign: 'center'
        }}
        >
          <option value="opcao1">Enfermagem</option>
          <option value="opcao2">Nefrologista</option>
        </select>
        <Styled.Button onClick={() => navigate('/patients')}>
          Cadastrar
        </Styled.Button>  
      </Styled.Wrapper>      
    </Styled.Container>
  )
};