import React from 'react';
import styled from 'styled-components';

const TodolistItem = ({
  id,
  title,
  handleEdit,
  handleDelete,
  handleComplete,
  isComplete,
}) => (
  <Item>
    <Title isComplete={isComplete}>{title}</Title>

    <Actions>
      <ActionsComplete
        onClick={() => handleComplete(id)}
        type="checkbox"
        checked={isComplete}
      />

      <i
        className="fa fa-pencil"
        aria-hidden="true"
        onClick={() => handleEdit(id)}
      />

      <i
        className="fa fa-trash-o"
        aria-hidden="true"
        onClick={() => handleDelete(id)}
      />
    </Actions>
  </Item>
);

export default TodolistItem;

const Item = styled.div`
  padding: 5px 10px;
  margin-bottom: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Title = styled.div`
  text-decoration: ${({ isComplete }) =>
    isComplete ? 'line-through' : 'unset'};
`;

const Actions = styled.div`
  font-size: 18px;

  & > * {
    margin: 0 5px;
    cursor: pointer;
  }
`;

const ActionsComplete = styled.input``;
