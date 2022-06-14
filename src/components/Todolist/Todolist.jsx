import React, { useState } from 'react';
import styled from 'styled-components';

import CreateTodolistItem from '../CreateTodolistItem/CreateTodolistItem';
import EditTodolistItem from '../EditTodolistItem/EditTodolistItem';
import TodolistItem from '../TodolistItem/TodolistItem';

const initialTodolist = [
  { id: 'react', title: 'Learn ReactJS', isComplete: true },
  { id: 'node', title: 'Learn NodeJS', isComplete: false },
  { id: 'next', title: 'Learn NextJS', isComplete: true },
];

const Filters = {
  All: 'All',
  Done: 'Done',
  Todo: 'Todo',
};

const Todolist = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentFilter, setCurrentFilter] = useState(Filters.All);
  const [todolist, setTodolist] = useState(initialTodolist);

  const ModalProps = {
    handleClose: () => setSelectedItem(null),
    handleSave: (newItem) => {
      setTodolist(
        todolist.map((item) => (item.id === newItem.id ? newItem : item)),
      );
      setSelectedItem(null);
    },
    item: selectedItem,
  };

  const TodolistItemProps = {
    handleEdit: (id) => {
      setSelectedItem(todolist.find((item) => item.id === id));
    },
    handleDelete: (id) => {
      setTodolist(todolist.filter((item) => item.id !== id));
    },
    handleComplete: (id) => {
      setTodolist(
        todolist.map((item) =>
          item.id === id ? { ...item, isComplete: true } : item,
        ),
      );
    },
  };

  const createNewTodolistItem = (item) => setTodolist([...todolist, item]);

  const getFilteredTodolist = () => {
    switch (currentFilter) {
      case Filters.Done:
        return todolist.filter(({ isComplete }) => isComplete);
      case Filters.Todo:
        return todolist.filter(({ isComplete }) => !isComplete);
      default:
        return todolist;
    }
  };

  return (
    <ListWrapper>
      <ListHeader>Create todolist item:</ListHeader>
      <CreateTodolistItem createNewTodolistItem={createNewTodolistItem} />

      <ListHeader>Todolist:</ListHeader>

      <ListFilters>
        <button onClick={() => setCurrentFilter(Filters.All)}>
          {Filters.All}
        </button>

        <button onClick={() => setCurrentFilter(Filters.Todo)}>
          {Filters.Todo}
        </button>

        <button onClick={() => setCurrentFilter(Filters.Done)}>
          {Filters.Done}
        </button>
      </ListFilters>

      <ListBody>
        {getFilteredTodolist()?.map((item) => (
          <TodolistItem key={item.id} {...item} {...TodolistItemProps} />
        ))}
      </ListBody>

      {!!selectedItem && <EditTodolistItem {...ModalProps} />}
    </ListWrapper>
  );
};

export default Todolist;

const ListWrapper = styled.div`
  color: black;
  width: 600px;
  min-height: 50vh;
  margin: 50px auto;
  border: 1px solid black;
  padding: 20px;
`;

const ListFilters = styled.div`
  color: black;
  width: 100%;
  margin: 15px 0;

  & > button {
    outline: none;
    border: unset;
    background: black;
    color: white;
    margin-right: 10px;
    padding: 1px 10px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const ListHeader = styled.div`
  font-size: 26px;
  margin: 25px 0 15px;
  font-weight: 600;
`;

const ListBody = styled.div`
  font-size: 25px;
`;
