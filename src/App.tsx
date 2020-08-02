import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <BrowserRouter>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Header />
      <Routes />
    </Suspense>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
