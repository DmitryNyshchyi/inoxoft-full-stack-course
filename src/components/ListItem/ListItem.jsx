import React from 'react';
import styled from 'styled-components';

const ListItem = ({ title }) => <Item>{title}</Item>;

export default ListItem;

const Item = styled.div`
  padding: 5px 10px;
  margin-bottom: 10px;
  border: 1px solid black;

  &:last-child {
    margin-bottom: 0;
  }
`;
