import React from 'react';
import styled from 'styled-components';

import { Filters } from './FiltersBar.utils';

const FiltersBar = ({ setCurrentFilter }) => (
  <FiltersWrapper>
    <button onClick={() => setCurrentFilter(Filters.All)}>{Filters.All}</button>

    <button onClick={() => setCurrentFilter(Filters.Todo)}>
      {Filters.Todo}
    </button>

    <button onClick={() => setCurrentFilter(Filters.Done)}>
      {Filters.Done}
    </button>
  </FiltersWrapper>
);

export default FiltersBar;

const FiltersWrapper = styled.div`
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
