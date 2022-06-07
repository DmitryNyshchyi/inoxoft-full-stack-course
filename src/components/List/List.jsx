import React, { useState } from 'react';
import styled from 'styled-components';

import CreateListItem from '../CreateListItem/CreateListItem';
import ListItem from '../ListItem/ListItem';

const List = () => {
  const [todoList, setTodoList] = useState([
    { id: 'react', title: 'Learn ReactJS' },
    { id: 'node', title: 'Learn NodeJS' },
  ]);

  const createNewTodoItem = (item) => setTodoList([...todoList, item]);

  return (
    <ListWrapper>
      <CreateListItem createNewTodoItem={createNewTodoItem} />
      <ListHeader>List Component:</ListHeader>
      <ListBody>
        {todoList.length > 0 &&
          todoList.map(({ id, title }) => <ListItem key={id} title={title} />)}
      </ListBody>
    </ListWrapper>
  );
};

export default List;

const ListWrapper = styled.div`
  color: black;
  width: 600px;
  min-height: 50vh;
  margin: 50px auto;
  flex-direction: row;
  border: 1px solid black;
  padding: 20px;
`;

const ListHeader = styled.div`
  font-size: 30px;
  margin: 20px 0;
  font-weight: 700;
`;

const ListBody = styled.div`
  font-size: 25px;
`;
