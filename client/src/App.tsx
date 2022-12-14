import React from 'react';
import Router from './Router';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Router />
    </div>
  );
};

export default App;
