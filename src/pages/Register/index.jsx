import { useState } from 'react';
import * as Styled from "./Register.styles";

export const Register = () => {
  const [formData, setFormData] = useState({
    nome: '',
    genero: '',
    dataNascimento: '',
    cpf: '',
    rg: '',
    estadoCivil: '',
    naturalidade: '',
    conjuge: '',
    filhos: '',
    telefone: '',
    acompanhanteResponsavel: '',
    convenio: '',
    numeroCarteirinhaCNS: '',
    validade: '',
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
    <Styled.FormWrapper>
      <Styled.FormTitle>Cadastro de Paciente</Styled.FormTitle>
      <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '20px'}}>
      <Styled.Container>
        <Styled.FormGroup>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
          />
        </Styled.FormGroup>
        <Styled.FormGroup>
          <label>Gênero:</label>
          <select name="genero" value={formData.genero} onChange={handleChange}>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="naoInformar">Não Informar</option>
          </select>
        </Styled.FormGroup>
        <Styled.FormGroup>
          <label>Data de Nasc:</label>
          <input
            type="date"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
          />
        </Styled.FormGroup>
        <Styled.FormGroup>
          <label>CPF:</label>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
          />
        </Styled.FormGroup>
        <Styled.FormGroup>
          <label>Naturalidade:</label>
          <input
            type="text"
            name="naturalidade"
            value={formData.naturalidade}
            onChange={handleChange}
          />
        </Styled.FormGroup>
      </Styled.Container>
      <Styled.Container>
        <Styled.FormGroup>
          <label>Telefone:</label>
          <input
            type="text"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            />
        </Styled.FormGroup>
        <Styled.FormGroup>
          <label>Convênio:</label>
          <select name="convenio" value={formData.convenio} onChange={handleChange}>
            <option value="sus">SUS</option>
            <option value="particular">Particular</option>
          </select>
        </Styled.FormGroup>
        <Styled.FormGroup>
          <label>CEP:</label>
          <input
            type="text"
            name="cep"
            value={formData.cep}
            onChange={handleChange}
          />
        </Styled.FormGroup>
        <Styled.FormGroup>
          <label>Logradouro:</label>
          <input
            type="text"
            name="logradouro"
            value={formData.logradouro}
            onChange={handleChange}
          />
        </Styled.FormGroup>
        <Styled.FormGroup>
          <label>Número:</label>
          <input
            type="text"
            name="numero"
            value={formData.numero}
            onChange={handleChange}
          />
        </Styled.FormGroup>
      </Styled.Container>
      </div>
      <Styled.Button>Cadastrar</Styled.Button>
    </Styled.FormWrapper>
    </>
  );
};