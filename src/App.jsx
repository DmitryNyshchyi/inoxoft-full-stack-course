import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import List from './components/List/List';

function App() {
  return (
    <AppWrapper>
      <List />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div``;
