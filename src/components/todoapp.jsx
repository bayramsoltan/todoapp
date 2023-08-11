import { Col, Container, Row } from 'react-bootstrap'
import NoteForm from './note-form'
import Notes from './notes'
import './todoapp.scss';
import { useState } from 'react';

const TodoApp = () => {

const [notes, setNotes] = useState([]);

const createNote = (message) => {

    const note = {
        id: Date.now(),
        message,
        completed: false
    }

setNotes([note, ...notes]);
}

const deleteNote = (id) => {
    const result = confirm("Are you sure to delete?")
    if(!result) return;
    const arr = notes.filter(note=>note.id != id);
    setNotes(arr);
}

const updateNote = (id) =>{
   const arr = notes.map(item=>{
    if(item.id === id){
return{...item}
    }else{

    }
    })
}
  return (
    <Container>
        <Row className='g-5'>
            <Col md={3}>
                <NoteForm createNote={createNote}/>
            </Col>
            <Col md={9}>
                <Notes notes={notes} deleteNote={deleteNote}/>
            </Col>
        </Row>
    </Container>
  )
}

export default TodoApp