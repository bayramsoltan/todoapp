import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const NoteForm = ({createNote}) => {
  const [message, setMessage] = useState("");
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Form.Group>
      <Button variant="warning" onClick={()=>createNote(message)}>Create Note</Button>
    </Form>
  );
};

export default NoteForm;
