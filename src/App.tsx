import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Loading from './components/Loading';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Header />
      <Routes />
    </Suspense>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
