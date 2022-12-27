import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAtom } from 'jotai';
import { testAtom } from './atoms';
import Home from './app/Home';

function App() {
  const [data, setSystemData] = useAtom(testAtom);

  useEffect(() => {
    if (data) setSystemData(data);
  }, [data]);

  return (
    <div className="h-screen">
      <Routes>
        <Route element={<Home />} path={'/'} />
      </Routes>
    </div>
  );
}

export default App;
