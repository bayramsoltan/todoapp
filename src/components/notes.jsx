import React from 'react'
import Note from './note'
import { Col, Container, Row } from 'react-bootstrap'

const Notes = ({notes,deleteNote}) => {
  return (
    <Container>
        <Row className='g-4'>
            {notes.map(note => <Col sm={6} md={4} lg={3}><Note {...note} deleteNote = {deleteNote}/></Col>)}
        </Row>
    </Container>
  )
}

export default Notes