import { Col, Container, Row } from 'react-bootstrap'
import NoteForm from './note-form'
import Notes from './notes'
import './todoapp.scss';
import { useState } from 'react';

const TodoApp = () => {

const [notes, setNotes] = useState("");

  return (
    <Container>
        <Row className='g-5'>
            <Col md={3}>
                <NoteForm/>
            </Col>
            <Col md={9}>
                <Notes/>
            </Col>
        </Row>
    </Container>
  )
}

export default TodoApp