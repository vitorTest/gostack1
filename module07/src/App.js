import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GLobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <GLobalStyle />
      <Routes />
    </BrowserRouter>
  );
}

export default App;