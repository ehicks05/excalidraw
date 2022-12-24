import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from './app/index';
import { Header, Footer, Loading } from './core-components';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-tr from-indigo-900 to-green-900 text-gray-50">
      <Header />
      <div className="flex h-full flex-grow flex-col p-4 pt-0">
        <Routes>
          <Route element={<Home />} path={'/'} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
