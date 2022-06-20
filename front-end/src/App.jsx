import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import Todolist from './components/Todolist/Todolist';

function App() {
  return (
    <AppWrapper>
      <Todolist />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div``;
