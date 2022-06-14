import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const EditTodolistItemModal = ({ item, handleClose, handleSave }) => {
  const [value, setValue] = useState(item?.title || '');

  return (
    <Modal show onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Edit todolist</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={String(value)}
              onChange={({ target }) => setValue(target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>

        <Button
          variant="primary"
          onClick={() => handleSave({ ...item, title: value.trim() })}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditTodolistItemModal;
