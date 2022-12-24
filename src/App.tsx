import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header, Footer } from './core-components';
import { Home } from './app/index';
import { useAtom } from 'jotai';
import { testAtom } from './atoms';

function App() {
  const [data, setSystemData] = useAtom(testAtom);

  useEffect(() => {
    if (data) setSystemData(data);
  }, [data]);

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
