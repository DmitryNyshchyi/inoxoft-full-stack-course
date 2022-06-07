import React, { useState } from 'react';
import styled from 'styled-components';

const CreateListItem = ({ createNewTodoItem }) => {
  const [value, setValue] = useState('');

  const handleSubmitForm = (e) => {
    e.preventDefault();

    createNewTodoItem({
      id: value.replace(/\s/g, ''),
      title: value.trim(),
    });
    setValue('');
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <Label>
        Create new item:
        <Input
          value={value}
          onChange={({ target }) => setValue(target.value)}
        />
      </Label>

      <Button disabled={!value.length}>Create</Button>
    </Form>
  );
};

export default CreateListItem;

const Form = styled.form`
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const Input = styled.input`
  padding: 0 5px;
  margin: 0 5px 0 15px;
  width: 200px;
  height: 30px;
  border-width: 1px;
  box-sizing: border-box;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
`;

const Button = styled.button`
  cursor: pointer;
  padding: 0 15px;
  background: black;
  color: white;
  outline: none;
  border: black;
  height: 30px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.5;
  }
`;
