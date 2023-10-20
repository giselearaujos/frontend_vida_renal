import { ButtonAction } from '../../components/ButtonAction';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import * as Styled from "./Patients.styles";
import { useEffect, useState } from 'react';
import { ModalForm } from '../../components/ModalForm';
import { api, apiBaseUrl} from '../../helpers/api';
import { Button, Modal } from 'rsuite';

export const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [patientToDelete, setPatientToDelete] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); 

  const loadPatients = () => {
    setIsLoading(true);
    api.get(`${apiBaseUrl}/patients`)
      .then(response => {
        setPatients(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    loadPatients();
  }, []);

  const addPatientToList = () => {
    setIsModalOpen(false);
    loadPatients();
  };

  if (isLoading) {
    return <Styled.LoadingWrapper>Carregando lista de pacientes...</Styled.LoadingWrapper>;
  }

  if (error) {
    return <Styled.LoadingWrapper>Erro ao carregar os pacientes</Styled.LoadingWrapper>;
  }

  const handleDeletePatient = (patientId) => {
    setPatientToDelete(patientId);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (patientToDelete) {
      api.delete(`${apiBaseUrl}/patients/${patientToDelete}`)
        .then(() => {
          loadPatients()
          setIsDeleteModalOpen(false)
        })
        .catch(error => {
          console.error("Erro ao excluir paciente: ", error);
        });
    }
  };

  const handleCloseDeleteConfirmation = () => {
    setPatientToDelete(null);
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      <Styled.ButtonWrapper>
      <ButtonAction
          icon={<AddCircleOutlineOutlinedIcon />}
          iconBackground="#1CA47E"
          iconColor="#FFF"
          text="Adicionar paciente"
          textColor="#FFF"
          hoverBackground="#5084d8"
          hoverColor="#FFF"
          onClick={() => setIsModalOpen(true)}
        />
      </Styled.ButtonWrapper>
      <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAddPatient={addPatientToList}/>
      <Styled.Table>
        <thead>
          <tr>
            <Styled.Th>Nome</Styled.Th>
            <Styled.Th>Contato</Styled.Th>
            <Styled.Th>Data de Nascimento</Styled.Th>
            <Styled.Th>Ação</Styled.Th>
          </tr>
        </thead>
        <tbody>
        {patients.map(({ resource: patient }) => {
          const date = patient.birthDate.split('-');
          const formattedDate = `${date[2]}/${date[1]}/${date[0]}`;
          return (
            <tr key={patient.id}>
              <Styled.Td>{patient.name[0].given} {patient.name[0].family}</Styled.Td>
              <Styled.Td>{patient.telecom[0].value}</Styled.Td>
              <Styled.Td>{formattedDate}</Styled.Td>
              <Styled.Td>
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                  <DeleteOutlinedIcon
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleDeletePatient(patient.id)}
                  />
                  <RemoveRedEyeIcon />
                </div>
              </Styled.Td>
            </tr>
          );
        })}
        </tbody>
      </Styled.Table>
      <Modal open={isDeleteModalOpen} onClose={handleCloseDeleteConfirmation}>
        <Modal.Header>
          <Modal.Title>Confirmação de Exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem certeza de que deseja excluir este paciente?
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseDeleteConfirmation} appearance="subtle">
            Cancelar
          </Button>
          <Button onClick={handleConfirmDelete} appearance="primary">
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};