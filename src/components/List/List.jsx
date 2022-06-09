import React, { useState } from 'react';
import styled from 'styled-components';

import CreateListItem from '../CreateListItem/CreateListItem';
import EditListItem from '../EditListItem/EditListItem';
import ListItem from '../ListItem/ListItem';

const initialTodoList = [
  { id: 'react', title: 'Learn ReactJS', isComplete: true },
  { id: 'node', title: 'Learn NodeJS', isComplete: false },
  { id: 'next', title: 'Learn NextJS', isComplete: true },
];

const Filters = {
  All: 'All',
  Done: 'Done',
  Todo: 'Todo',
};

const List = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentFilter, setCurrentFilter] = useState(Filters.All);
  const [todoList, setTodoList] = useState(initialTodoList);

  const ModalProps = {
    handleClose: () => setSelectedItem(null),
    handleSave: (newItem) => {
      setTodoList(
        todoList.map((item) => (item.id === newItem.id ? newItem : item)),
      );
      setSelectedItem(null);
    },
    item: selectedItem,
  };

  const ListItemProps = {
    handleEdit: (id) => {
      setSelectedItem(todoList.find((item) => item.id === id));
    },
    handleDelete: (id) => {
      setTodoList(todoList.filter((item) => item.id !== id));
    },
    handleComplete: (id) => {
      setTodoList(
        todoList.map((item) =>
          item.id === id ? { ...item, isComplete: true } : item,
        ),
      );
    },
  };

  const createNewTodoItem = (item) => setTodoList([...todoList, item]);

  const getFilteredTodoList = () => {
    switch (currentFilter) {
      case Filters.Done:
        return todoList.filter(({ isComplete }) => isComplete);
      case Filters.Todo:
        return todoList.filter(({ isComplete }) => !isComplete);
      default:
        return todoList;
    }
  };

  return (
    <ListWrapper>
      <CreateListItem createNewTodoItem={createNewTodoItem} />
      <ListHeader>List Component:</ListHeader>

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
        {getFilteredTodoList()?.map((item) => (
          <ListItem key={item.id} {...item} {...ListItemProps} />
        ))}
      </ListBody>

      {!!selectedItem && <EditListItem {...ModalProps} />}
    </ListWrapper>
  );
};

export default List;

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
  font-size: 30px;
  margin: 20px 0;
  font-weight: 700;
`;

const ListBody = styled.div`
  font-size: 25px;
`;
