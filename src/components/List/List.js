import React from 'react';
import styled from 'styled-components';

const List = () => {
  const todos = [
    { id: 'react', title: 'Learn ReactJS' },
    { id: 'node', title: 'Learn NodeJS' },
  ];

  return (
    <ListWrapper>
      <ListHeader>List Component</ListHeader>
      <ListBody>
        {todos.length > 0 &&
          todos.map(({ id, title }) => (
            <ListBodyItem key={id}>{title}</ListBodyItem>
          ))}
      </ListBody>
    </ListWrapper>
  );
};

export default List;

const ListWrapper = styled.div`
  color: black;
`;

const ListHeader = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
`;

const ListBody = styled.div`
  font-size: 25px;
`;

const ListBodyItem = styled.div`
  padding: 5px 0;
`;
