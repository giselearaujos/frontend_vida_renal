import { Modal, Button, Form } from 'rsuite';
import PropTypes from "prop-types";
import { useState } from 'react';
import axios from 'axios';
import { apiBaseUrl } from '../../helpers/api';
import moment from 'moment';
import MaskedInput from 'react-text-mask';

export const ModalForm = ({ isOpen, onClose, onAddPatient }) => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    phone: '',
    birthday: '',
  });

  const [validationError, setValidationError] = useState(null);

  const handleFormChange = (value, name) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (!formData.name || !formData.lastName || !formData.phone || !formData.birthday) {
      setValidationError('Todos os campos são obrigatórios.');
      return false;
    }
    return true;
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\(\d{2}\)\s\d{5}-\d{4}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleConfirm = () => {
    if (validateForm()) {
      setValidationError(null);
      const parsedBirthday = moment(formData.birthday, 'DD/MM/YYYY');

      if (!validatePhoneNumber(formData.phone)) {
        setValidationError('O telefone deve estar no formato (11) 99999-9999.');
        return;
      }

      const newPatient = {
        resourceType: 'Patient',
        active: true,
        name: [
          {
            use: 'official',
            family: formData.lastName,
            given: [formData.name],
          },
        ],
        telecom: [
          {
            system: 'phone',
            value: formData.phone,
            use: 'mobile',
            rank: 1,
          },
        ],
        gender: 'male',
        birthDate: parsedBirthday.format('YYYY-MM-DD'),
        address: [
          {
            use: 'home',
            type: 'both',
            text: '534 Erewhon St PeasantVille, Rainbow, Vic  3999',
            line: ['534 Erewhon St'],
            city: 'PleasantVille',
            district: 'Rainbow',
            state: 'Vic',
            postalCode: '3999',
            period: {
              start: '1974-12-25',
            },
          },
        ],
      };

      axios
        .post(`${apiBaseUrl}/patients`, newPatient)
        .then((response) => {
          console.log('Paciente cadastrado com sucesso:', response.data);
          onClose();
          onAddPatient(newPatient);
        })
        .catch((error) => {
          console.error('Erro ao cadastrar paciente:', error);
        });
    }
    setFormData({
      name: '',
      lastName: '',
      phone: '',
      birthday: '',
    });
  };

  return (
    <>
      <Modal open={isOpen} onClose={onClose}>
        <Modal.Header>
          <Modal.Title>Cadastrar Paciente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form fluid>
            <Form.Group controlId="name">
              <Form.ControlLabel>Nome</Form.ControlLabel>
              <Form.Control
                name="name"
                value={formData.name}
                onChange={(value) => handleFormChange(value, 'name')}
              />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.ControlLabel>Sobrenome</Form.ControlLabel>
              <Form.Control
                name="lastName"
                value={formData.lastName}
                onChange={(value) => handleFormChange(value, 'lastName')}
              />
            </Form.Group>
            <Form.Group controlId="phone">
            <Form.ControlLabel>Telefone</Form.ControlLabel>
            <MaskedInput
              mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
              className="rs-input"
              guide={false}
              value={formData.phone}
              onChange={(e) => handleFormChange(e.target.value, 'phone')}
            />
            </Form.Group>
            <Form.Group controlId="birthday">
              <Form.ControlLabel>Data de Nascimento</Form.ControlLabel>
              <MaskedInput
                mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                className="rs-input"
                guide={false}
                value={formData.birthday}
                onChange={(e) => handleFormChange(e.target.value, 'birthday')}
              />
            </Form.Group>
            {validationError && (
              <p style={{ color: 'red' }}>{validationError}</p>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleConfirm} appearance="primary">
            Confirmar
          </Button>
          <Button onClick={onClose} appearance="subtle">
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

ModalForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAddPatient: PropTypes.func.isRequired,
};