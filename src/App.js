import React from 'react';
import styled from 'styled-components';

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
