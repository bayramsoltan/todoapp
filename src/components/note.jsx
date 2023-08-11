import React from "react";
import {Card} from "react-bootstrap";
import {FaTrash, FaEdit} from 'react-icons/fa';

const Note = ({id, message, completed,deleteNote}) => {
  return (
    <Card className="todo-card">
      <Card.Body>
        <Card.Title>{message}</Card.Title>
      </Card.Body>
      <Card.Footer className="buttons">
      <span><FaEdit/></span>
      <span onClick = {()=>deleteNote(id)}><FaTrash/></span>
      </Card.Footer>
    </Card>
  );
};

export default Note;
