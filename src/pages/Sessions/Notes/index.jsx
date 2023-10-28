import { useState, useEffect } from 'react';
import { ButtonAction } from '../../../components/ButtonAction';
import * as Styled from './Notes.styles';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import { Button, Form, Input, Modal, Panel } from 'rsuite';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export const Notes = () => {
  const [open, setOpen] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [newName, setNewName] = useState('');
  const [newPressure, setNewPressure] = useState('');
  const [notes, setNotes] = useState([]);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(-1);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSelectedNoteIndex(-1);
  };

  const handleSaveNote = () => {
    if (newMessage && newName && newPressure) {
      const currentDate = new Date();
      const formattedDate = `
        ${currentDate.getDate()} de
        ${getMonthName(currentDate.getMonth())} de
        ${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}
      `;
  
      const newNote = {
        name: newName,
        pressure: newPressure,
        note: newMessage,
        dateTime: formattedDate,
      };
  
      if (selectedNoteIndex !== -1) {        
        const updatedNotes = [...notes];
        updatedNotes[selectedNoteIndex] = newNote;
        setNotes(updatedNotes);
      } else {        
        setNotes([...notes, newNote]);
      }
  
      localStorage.setItem('notes', JSON.stringify(notes));
      setNewMessage('');
      setNewName('');
      setNewPressure('');
      setSelectedNoteIndex(-1); 
      setOpen(false);
    }
  };

  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  const handleRemoveNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const getMonthName = (month) => {
    const monthNames = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    return monthNames[month];
  };

  return (
    <Styled.Container>
      <ButtonAction
        icon={<AddCircleRoundedIcon />}
        iconBackground="#1CA47E"
        iconColor="#FFF"
        text="Adicionar nota"
        textColor="#FFF"
        hoverBackground="#86a9e0"
        hoverColor="#FFF"
        onClick={handleOpen}
      />
      <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title style={{ fontSize: '1.5rem', color: '#364887' }}>Adicione sua nota</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form fluid>
            <Form.Group controlId="name">
              <Form.ControlLabel style={{ fontSize: '1.3rem', color: '#364887' }}>Nome:</Form.ControlLabel>
              <Form.Control
                type="text"
                value={newName}
                onChange={(value) => setNewName(value)}
                style={{ border: '1px solid #696969', fontSize: '1.3rem' }}
              />
            </Form.Group>
            <Form.Group controlId="blood_pressure">
              <Form.ControlLabel style={{ fontSize: '1.3rem', color: '#364887' }}>Pressão Arterial:</Form.ControlLabel>
              <Form.Control
                type="text"
                value={newPressure}
                onChange={(value) => setNewPressure(value)}
                style={{ border: '1px solid #696969', fontSize: '1.3rem' }}
              />
            </Form.Group>
            <Form.Group controlId="note">
              <Form.ControlLabel style={{ fontSize: '1.3rem', color: '#364887' }}>Nota:</Form.ControlLabel>
              <Input
                as="textarea"
                rows={5}
                value={newMessage}
                onChange={(value) => setNewMessage(value)}
                style={{ border: '1px solid #696969', fontSize: '1.3rem' }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSaveNote} appearance="primary">
            Salvar
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
      {notes.map((note, index) => (
        <Styled.CardReport key={index}>
          <Panel
            style={{ border: '2px solid #C0C0C0' }}
            header={
              note.name
                ?
                <Styled.WrapperPannel>
                    <Styled.Left>
                        <Styled.CircleName>
                            {note.name.charAt(0)}
                        </Styled.CircleName>
                        <div>
                            <div>
                                <Styled.TitleReport>{note.name}</Styled.TitleReport>
                                <Styled.Date>{note.dateTime}</Styled.Date>
                            </div>
                        </div>
                    </Styled.Left>
                    <Styled.Rigth>
                        <DeleteOutlinedIcon
                          style={{ cursor: 'pointer', color: '#808080', fontSize: '2rem', fontWeight: 'bold' }}
                          onClick={() => handleRemoveNote(index)}
                        />
                        <ModeEditRoundedIcon
                          style={{ cursor: 'pointer', color: '#808080', fontSize: '2rem', fontWeight: 'bold' }}
                          onClick={() => {
                            setSelectedNoteIndex(index); 
                            setNewName(note.name);
                            setNewPressure(note.pressure);
                            setNewMessage(note.note);
                            handleOpen();
                          }}
                        />
                    </Styled.Rigth>
              </Styled.WrapperPannel>
                : 'Nome Indefinido'
            }
            collapsible
            bordered
          >
            <Styled.WrapperPressureNote>
                <Styled.PressureText>Pressão Arterial: <span>{note.pressure} mmHg</span></Styled.PressureText>
                <Styled.PressureText>Nota: <span>{note.note}</span></Styled.PressureText>
            </Styled.WrapperPressureNote>
          </Panel>
        </Styled.CardReport>
      ))}
    </Styled.Container>
  );
};
