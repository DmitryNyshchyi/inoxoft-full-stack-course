import React, { useState } from 'react';
import styled from 'styled-components';

import CreateTodolistItem from '../CreateTodolistItem/CreateTodolistItem';
import EditTodolistItemModal from '../EditTodolistItemModal/EditTodolistItemModal';
import FiltersBar from '../FiltersBar/FiltersBar';
import { Filters } from '../FiltersBar/FiltersBar.utils';
import TodolistItem from '../TodolistItem/TodolistItem';

const initialTodolist = [
  { id: 'react', title: 'Learn ReactJS', isComplete: true },
  { id: 'node', title: 'Learn NodeJS', isComplete: false },
  { id: 'next', title: 'Learn NextJS', isComplete: true },
];

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
      <FiltersBar setCurrentFilter={setCurrentFilter} />

      <ListBody>
        {getFilteredTodolist()?.map((item) => (
          <TodolistItem key={item.id} {...item} {...TodolistItemProps} />
        ))}
      </ListBody>

      {!!selectedItem && <EditTodolistItemModal {...ModalProps} />}
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

const ListHeader = styled.div`
  font-size: 26px;
  margin: 25px 0 15px;
  font-weight: 600;
`;

const ListBody = styled.div`
  font-size: 25px;
`;
